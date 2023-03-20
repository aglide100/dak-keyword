import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Button } from "../../src/components/atom/Button/Button";
import { CallGetJobIsReRun, CallReRunJob } from "../../src/grpc/job";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Switch from "react-switch";
import { TailSpin } from "react-loader-spinner";
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

    const [IsModalOpen, setIsModalOpen] = useState(false);
    const [accessCode, setAccessCode] = useState("");

    const [isClick, setIsClick] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isLogicRun, setIsLogicRun] = useState<boolean>(false);

    useEffect(() => {
        if (!isLoaded && router.isReady) {
            fetchGetJobIsReRun();
        }
    }, []);

    async function fetchGetJobIsReRun() {
        CallGetJobIsReRun(router.query.jobId, (message) => {
            setIsClick(message.result);

            setIsLoaded(true);
        });
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setAccessCode("");
    };

    const handleReRunJob = async () => {
        setIsLogicRun(true);

        try {
            await CallReRunJob(
                router.query.jobId,
                accessCode,
                isClick,
                (res) => {
                    console.log(res);
                },
            ).then(() => {
                setIsLogicRun(false);
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
                            onClick={() => setIsModalOpen(true)}
                        >
                            ReRunJob
                        </Button>

                        <Modal
                            isOpen={IsModalOpen}
                            ariaHideApp={false}
                            onRequestClose={closeModal}
                            contentLabel="ReRunJob Modal"
                            className="fixed inset-0 z-30 overflow-auto bg-gray-700 bg-opacity-75"
                        >
                            {isLogicRun ? (
                                <div className="flex flex-col fixed z-40 inset-0 bg-gray-700 flex items-center justify-center">
                                    <TailSpin
                                        height="80"
                                        width="80"
                                        color="#4fa94d"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                    <div className="mt-10 text-white text-2xl flex flex-row">
                                        Trying to reruning job
                                        <div className="writer">
                                            <div className="writer-text">
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            <motion.div
                                key={"modal_inner"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col h-full justify-center inset-0 p-8 mx-auto max-w-lg"
                            >
                                <div className="bg-white rounded-lg shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="text-xl mb-4">
                                            Are you sure you want to rerun the
                                            job?
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-3">
                                                Running on schedule every day
                                            </span>
                                            <Switch
                                                onChange={() => {
                                                    setIsClick(!isClick);
                                                }}
                                                checked={isClick}
                                                onColor="#86d3ff"
                                                onHandleColor="#2693e6"
                                                handleDiameter={30}
                                                uncheckedIcon={isClick}
                                                checkedIcon={isClick}
                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={20}
                                                width={48}
                                                className="react-switch"
                                                id="material-switch"
                                            />
                                        </div>
                                        <div className="mb-4 mt-3">
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
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
