import React from "react";
import dynamic from "next/dynamic";

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

const GRPCWEBADDR = process.env.GRPCWEBADDR;

export default function Home() {
    console.log("!", GRPCWEBADDR);
    return (
        <div className="w-full bg-gray-100 flex flex-col content-around">
            <div className="w-full flex flex-col">
                <JobList />
            </div>
        </div>
    );
}
