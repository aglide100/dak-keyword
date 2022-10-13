import React, { useEffect, useState, useRef } from "react";
import { makeGetWorkers } from "../../../grpc/worker";
import { WorkerItem } from "../../atom/WorkerItem/Worker";
import { useRouter } from "next/router";

type worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
};

const List: React.FC<{ JobId }> = ({ JobId }) => {
    const [data, setData] = useState<worker[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [number, setNumber] = useState(0);
    const number_ref = useRef(0);
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded && router.pathname == "/job") {
            fetchWorkerList(JobId);

            const loop = setInterval(() => {
                number_ref.current += 1;
                setNumber(number_ref.current);

                if (router.pathname == "/job") {
                    fetchWorkerList(JobId);
                }

                if (number_ref.current === 10) clearInterval(loop);
            }, 5000);
        }
    });

    async function fetchWorkerList(jobId) {
        makeGetWorkers(jobId, (message) => {
            const newWorkerList: worker[] = [];

            message.workerList.map((value, _) => {
                const newWorker: worker = {
                    WorkerId: value.workerId,
                    Status: value.status,
                    Keyword: value.keyword,
                    JobId: value.jobId,
                };
                newWorkerList.push(newWorker);
            });

            if (data != newWorkerList) {
                setData(newWorkerList);
            }

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
            return (
                <div key={"job" + index} className="w-full flex justify-center">
                    <WorkerItem
                        workerId={job.WorkerId}
                        status={job.Status}
                        jobId={job.JobId}
                        workerKeyword={job.Keyword}
                    ></WorkerItem>
                </div>
            );
        });
    }

    return <>{WorkerList}</>;
};

export default List;
