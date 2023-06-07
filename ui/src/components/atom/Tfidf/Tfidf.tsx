import React, { useEffect, useState } from "react";
import { CallGetWorkers } from "../../../grpc/worker";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";

type Worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
    UpdateAt: string;
};

export const Tfidf = () => {
    const router = useRouter();

    const [workerList, setWorkerList] = useState<Worker[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // default, TODO change 2 / 3 / 2
    const [maximumCount, setMaximum] = useState<number>(7);
    const [currentPageNum, setCurrentPageNum] = useState<number>(0);
    // const [currentWorkerList, setCurrentWorkerList] = useState<Worker[]>([]);

    useEffect(() => {
        if (router.isReady && !isLoaded) {
            setMaximum(7);
            setCurrentPageNum(0);
            fetchWorkerList(router.query.jobId);
        }
    }, []);

    async function fetchWorkerList(jobId) {
        CallGetWorkers(jobId, (message) => {
            const newWorkerList: Worker[] = message.workerList.map((value) => ({
                WorkerId: value.workerId,
                Status: value.status,
                Keyword: value.keyword,
                JobId: value.jobId,
                UpdateAt: value.updateAt,
            }));

            newWorkerList.sort(
                (a, b) =>
                    new Date(b.UpdateAt).getTime() -
                    new Date(a.UpdateAt).getTime(),
            );

            setWorkerList(newWorkerList);
            setIsLoaded(true);
        });
    }

    let ResultList;
    if (isLoaded && workerList.length > 0) {
        // const tmpWorkerList = new Array<Worker>
        // for (let i=0; i<maximumCount; i++) {
        //     tmpWorkerList.push(workerList[i + (currentPageNum * maximumCount)])
        // }

        // setCurrentWorkerList(tmpWorkerList)

        ResultList = (
            <ul>
                {workerList
                    .slice(
                        currentPageNum * maximumCount,
                        currentPageNum * maximumCount + maximumCount,
                    )
                    .map((worker) => (
                        <li key={worker.WorkerId}>
                            Worker ID: {worker.WorkerId}, Status:{" "}
                            {worker.Status}, Keyword: {worker.Keyword}, Job ID:{" "}
                            {worker.JobId}, Update At: {worker.UpdateAt}
                        </li>
                    ))}
            </ul>
        );
    } else if (isLoaded) {
        ResultList = <>No data...</>;
    } else {
        ResultList = (
            <div className="flex flex-col w-full fixed z-30 inset-0 bg-gray-700 flex items-center justify-center">
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
                    Loading data
                    <div className="writer">
                        <div className="writer-text">...</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <div>{ResultList}</div>
            <div className="flex flex-row">
                <div
                    onClick={(e) => {
                        e.preventDefault();

                        setCurrentPageNum(currentPageNum - 1);
                    }}
                >
                    Left
                </div>
                <div
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Right
                </div>
            </div>
        </div>
    );
};

export default Tfidf;
