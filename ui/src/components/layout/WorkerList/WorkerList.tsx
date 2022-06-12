import React, { useEffect, useState } from "react";
import { makeGetWorkers } from "../../../grpc/worker";
import { useRouter } from "next/router";
import { WorkerItem } from "../../atom/Worker/Worker";

type worker = {
    workerId: String;
    status: String;
    jobId: String;
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
                var newWorker: worker = {
                    workerId: value.worker_id,
                    status: value.status,
                    jobId: value.job_id,
                };
                newWorkerList.push(newWorker);

                setData(newWorkerList);
            });

            setIsLoaded(true);
        });
    }

    var WorkerList;
    if (data == null || data == undefined || data.length == 0) {
        WorkerList = (
            <div className="w-full flex justify-center mt-10">
                Can't find workers!
            </div>
        );
    } else {
        WorkerList = data.map((job, index) => {
            return (
                <div key={"job" + index} className="w-full flex justify-center">
                    <WorkerItem
                        workerId={job.workerId.toString()}
                        status={job.status.toString()}
                        jobId={job.jobId.toString()}
                    ></WorkerItem>
                </div>
            );
        });
    }

    return <>{WorkerList}</>;
};

export default List;
