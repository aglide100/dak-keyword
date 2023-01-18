import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Button } from "../../src/components/atom/Button/Button";
import { CallReRunJob } from "../../src/grpc/job";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import { CallReRunJob } from "../../src/grpc/job";

const WorkerList = dynamic(
    () =>
        import("../../src/components/layout/WorkerList/WorkerList").catch(
            (err) => {
                return () => <>Can't load worker list {err}</>;
            },
        ),
    {
        loading: () => <></>,
        ssr: false,
    },
);

export default function Job() {
    const router = useRouter();

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
                            onClick={() => {
                                const result = window.prompt(
                                    "Are you sure rerunning job?",
                                    "accessCode",
                                );
                                CallReRunJob(
                                    router.query.jobId,
                                    result,
                                    (res) => {
                                        alert(res);
                                    },
                                );
                            }}
                        >
                            ReRunJob
                        </Button>
                    </div>
                </div>
            </div>

            <WorkerList JobId={router.query.jobId}></WorkerList>
        </div>
    );
}
