import React, { useEffect, useState } from "react";
import { makeGetWorkers } from "../../../grpc/worker";
import { useRouter } from "next/router";
import { WorkerItem } from "../../atom/WorkerItem/Worker";

type worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
    Parent_keyword: string;
};

const List: React.FC<{ JobId }> = ({ JobId }) => {
    const [data, setData] = useState<worker[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // const router = useRouter();

    useEffect(() => {
        if (!isLoaded) {
            fetchWorkerList(JobId);
        }
    }, []);

    async function fetchWorkerList(jobId) {
        makeGetWorkers(jobId, (message) => {
            message.workerList.map((value, _) => {
                console.log(value);
                const newWorkerList = data;
                const newWorker: worker = {
                    WorkerId: value.workerId,
                    Status: value.status,
                    Keyword: value.keyword,
                    JobId: value.jobId,
                    Parent_keyword: value.parent_keyword,
                };
                newWorkerList.push(newWorker);

                setData(newWorkerList);
            });

            setIsLoaded(true);
        });
    }

    let WorkerList;
    if (data == null || data == undefined || data.length == 0) {
        WorkerList = (
            <div className="w-full flex justify-center mt-10">
                Can't find workers!
            </div>
        );
    } else {
        WorkerList = data.map((job, index) => {
            console.log("!!!!!!!!" + job);
            return (
                <div key={"job" + index} className="w-full flex justify-center">
                    <WorkerItem
                        workerId={job.WorkerId}
                        status={job.Status}
                        jobId={job.JobId}
                    ></WorkerItem>
                </div>
            );
        });
    }

    return <>{WorkerList}</>;
};

export default List;
