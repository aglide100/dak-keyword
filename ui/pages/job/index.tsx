import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Button } from "../../src/components/atom/Button/Button";
import { CallReRunJob } from "../../src/grpc/job";
import Modal from "react-modal";
import { motion } from "framer-motion";

const WorkerList = dynamic(
    () =>
        import("../../src/components/layout/WorkerList/WorkerList").catch(
            (err) => {
                return () => <>Can't load worker list {err}</>;
            },
        ),
    {
        loading: () => <></>,
        ssr: true,
    },
);

export default function Job() {
    const router = useRouter();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [accessCode, setAccessCode] = useState("");

    const closeModal = () => {
        setModalIsOpen(false);
        setAccessCode("");
    };

    const handleReRunJob = async () => {
        try {
            await CallReRunJob(router.query.jobId, accessCode, (res) => {
                console.log(res);
            }).then(() => {
                closeModal();
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col content-around">
            <div className="flex flex-row w-full mt-12 mb-5 justify-center">
                <div className="flex flex-row w-full h-10 mr-5 justify-around">
                    <div className="mr-5 w-3/4 ml-10">
                        <Button
                            size="full"
                            color={"gray"}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push({
                                    pathname: "/articles",
                                    query: { jobId: router.query.jobId },
                                });
                            }}
                        >
                            Articles
                        </Button>
                    </div>
                    <div className="w-3/4 mr-10">
                        <Button
                            size="full"
                            color={"gray"}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push({
                                    pathname: "/graph",
                                    query: { jobId: router.query.jobId },
                                });
                            }}
                        >
                            Graph
                        </Button>
                    </div>
                    <div className="w-1/4 mr-10">
                        <Button
                            size="full"
                            color={"purple"}
                            onClick={() => setModalIsOpen(true)}
                        >
                            ReRunJob
                        </Button>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="ReRunJob Modal"
                            className="fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-75"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col h-full justify-center inset-0 p-8 mx-auto max-w-lg"
                            >
                                <div className="bg-white rounded-lg shadow-lg">
                                    <div className="px-6 py-4">
                                        <h2 className="text-xl mb-4">
                                            Are you sure you want to rerun the
                                            job?
                                        </h2>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="accessCode"
                                                className="block text-gray-700 font-bold mb-2"
                                            >
                                                Access Code
                                            </label>
                                            <input
                                                type="password"
                                                id="accessCode"
                                                value={accessCode}
                                                onChange={(e) =>
                                                    setAccessCode(
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full px-3 py-2 border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="flex justify-around w-full mt-6 h-10">
                                            <div className="w-full mr-3">
                                                <Button
                                                    size="full"
                                                    color="gray"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                            <div className="w-full">
                                                <Button
                                                    size="full"
                                                    color="purple"
                                                    onClick={handleReRunJob}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Modal>
                    </div>
                </div>
            </div>

            <WorkerList JobId={router.query.jobId}></WorkerList>
        </div>
    );
}
