import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "../src/components/atom/Button/Button";
import { makeNewJob } from "../src/grpc/job";
import { useRouter } from "next/router";

const JobList = dynamic(
    () =>
        import("../src/components/layout/JobList/JobList").catch((err) => {
            return () => <>Can't load job list... {err}</>;
        }),
    {
        loading: () => <>Loading...</>,
        ssr: false,
    },
);

export default function Home() {
    const router = useRouter();

    return (
        <div className="w-full bg-gray-100 h-full flex flex-col content-around">
            <div className="w-full flex flex-col">
                <JobList />
                <div className="mt-10">
                    <Button
                        size="large"
                        onClick={(e) => {
                            e.preventDefault();
                            const keyword = prompt("Keyword");
                            const owner = prompt("Owner");
                            makeNewJob(keyword, owner, (message) => {
                                alert("Done" + message);
                                router.push("/");
                            });
                        }}
                    >
                        New Job
                    </Button>
                </div>
            </div>
        </div>
    );
}
