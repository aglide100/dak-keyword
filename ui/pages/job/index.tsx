import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Button } from "../../src/components/atom/Button/Button";

const WorkerList = dynamic(
    () =>
        import("../../src/components/layout/WorkerList/WorkerList").catch(
            (err) => {
                return () => <>Can't load worker list {err}</>;
            },
        ),
    {
        loading: () => <>Loading...</>,
        ssr: false,
    },
);

export default function Job() {
    const router = useRouter();

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col content-around">
            <div className="flex flex-row w-full mt-12 mb-5 justify-center">
                <div className="flex flex-row w-2/5 mr-5 justify-around">
                    <div className="mr-5">
                        <Button
                            size={"large"}
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
                    <div>
                        <Button
                            size={"large"}
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
                </div>
            </div>

            <WorkerList JobId={router.query.jobId}></WorkerList>
        </div>
    );
}
