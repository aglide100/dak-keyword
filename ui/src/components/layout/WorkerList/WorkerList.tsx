import React, { useEffect, useState, useRef } from "react";
import { CallGetWorkers } from "../../../grpc/worker";
import { WorkerItem } from "../../atom/WorkerItem/WorkerItem";
import { useRouter } from "next/router";

type worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
    UpdateAt: string;
};

const List: React.FC<{ JobId }> = ({ JobId }) => {
    const [data, setData] = useState<worker[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [number, setNumber] = useState(0);
    const number_ref = useRef(0);
    const router = useRouter();

    useEffect(() => {
        if (router.pathname == "/job" && !isLoaded) {
            fetchWorkerList(JobId);
        }

        const loop = setInterval(() => {
            number_ref.current += 1;
            setNumber(number_ref.current);

            if (number == 1000) {
                clearInterval(loop);
            }

            if (router.pathname == "/job") {
                fetchWorkerList(JobId);
            }
        }, 1500);
        return () => clearInterval(loop);
    });

    async function fetchWorkerList(jobId) {
        CallGetWorkers(jobId, (message) => {
            const newWorkerList: worker[] = [];

            message.workerList.map((value, _) => {
                const newWorker: worker = {
                    WorkerId: value.workerId,
                    Status: value.status,
                    Keyword: value.keyword,
                    JobId: value.jobId,
                    UpdateAt: value.updateAt,
                };
                newWorkerList.push(newWorker);
            });

            newWorkerList.sort(function (a, b) {
                return a.Keyword.length - b.Keyword.length;
            });
            if (data != newWorkerList) {
                setData(newWorkerList);
            }

            setIsLoaded(true);
        });
    }

    let WorkerList;
    if (!isLoaded) {
        WorkerList = (
            <div className="w-full flex justify-center mt-10">
                is loading...
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

        if (data == undefined || data.length <= 0) {
            WorkerList = <>There's no worker...</>;
        }
    }

    return <>{WorkerList}</>;
};

export default List;
