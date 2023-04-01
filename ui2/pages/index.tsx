import React, { useEffect, useState } from "react";
import { CallGetJobList } from "../grpc/job";

export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        CallGetJobList((res: any) => {
            setJobs(res.jobListList);
            console.log(jobs);
        });
    }, []);

    return (
        <div className="w-full bg-gray-100 flex flex-col content-around">
            <div className="w-full flex flex-col"></div>
        </div>
    );
}
