import React, { useEffect, useState } from "react";
import { CallGetWorkers } from "../../../grpc/worker";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { CallGetCosineSimilarity } from "../../../grpc/similarity";
import CosineSimilarityItem from "../../atom/CosineSimilarity/CosineSimilarity";

type Worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
    UpdateAt: string;
};

export type CosineSimilarity = {
    CosineSimilarityId: number;
    WorkerId: string;
    ColumnIdList: Array<number>;
    RowIdList: Array<number>;
    ScoreList: Array<number>;
};

export type Vocab = {
    vocabId: number;
    jobId: string;
    workerId: string;
    wordsList: Array<string>;
};

export const CosineSimilarityList = () => {
    const router = useRouter();

    const [workerList, setWorkerList] = useState<Worker[]>([]);
    const [workerListLoaded, setWorkerListLoaded] = useState<boolean>(false);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [cosineSimilarityList, setCosineSimilarityList] = useState<
        CosineSimilarity[]
    >([]);

    const [isCosineSimilarityLoaded, setIsCosineSimilarityLoaded] =
        useState<boolean>(false);

    const maximumCount = 1;
    const [currentPageNum, setCurrentPageNum] = useState<number>(0);

    const [lastInput, setLastInput] = useState<boolean>(true);

    useEffect(() => {
        if (router.isReady && !isLoaded) {
            setCurrentPageNum(0);
            fetchWorkerList(router.query.jobId);
        }
    }, []);

    useEffect(() => {
        if (workerListLoaded) {
            workerList
                .slice(
                    currentPageNum * maximumCount,
                    currentPageNum * maximumCount + maximumCount,
                )
                .forEach((worker) => {
                    fetchCosineSimilarity(worker.WorkerId);
                });

            setIsCosineSimilarityLoaded(true);
        }
    }, [workerListLoaded, currentPageNum]);

    async function fetchCosineSimilarity(workerId) {
        if (!workerListLoaded) {
            console.log("worker list didn't loaded");
        } else {
            CallGetCosineSimilarity(workerId, (message) => {
                console.log(message);
                if (message.cosinesimilarity != undefined) {
                    const newCosineSimilarity: CosineSimilarity = {
                        CosineSimilarityId:
                            message.cosinesimilarity.cosineSimilarityId,
                        WorkerId: message.cosinesimilarity.workerId,
                        ColumnIdList: message.cosinesimilarity.columnIdList,
                        RowIdList: message.cosinesimilarity.rowIdList,
                        ScoreList: message.cosinesimilarity.scoreList,
                    };

                    if (newCosineSimilarity == undefined) {
                        if (lastInput) {
                            setCurrentPageNum(currentPageNum + 1);
                        } else {
                            setCurrentPageNum(currentPageNum - 1);
                        }

                        setIsCosineSimilarityLoaded(false);
                        setCosineSimilarityList([]);
                    } else {
                        setCosineSimilarityList([
                            ...cosineSimilarityList,
                            newCosineSimilarity,
                        ]);
                    }
                }
            });
        }
    }

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
            setWorkerListLoaded(true);
            setIsLoaded(true);
        });
    }
    let ResultList;
    let displayWorkerList;
    if (!isLoaded) {
        ResultList = (
            <div className="flex flex-col w-full fixed inset-0 flex items-center justify-center">
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
    } else if (cosineSimilarityList == undefined && isCosineSimilarityLoaded) {
        ResultList = <>No data...</>;
    } else {
        displayWorkerList = workerList
            .slice(
                currentPageNum * maximumCount,
                currentPageNum * maximumCount + maximumCount,
            )
            .map((worker) => {
                return <>{worker.WorkerId}</>;
            });

        ResultList = cosineSimilarityList.map((row, index) => {
            return (
                <CosineSimilarityItem
                    key={"item_" + index}
                    {...row}
                ></CosineSimilarityItem>
            );
        });
    }

    return (
        <div className="flex flex-col">
            <div className="mt-5">Current WorkerId : {displayWorkerList}</div>
            <div className="flex flex-row justify-around mt-5">
                <div
                    className="focus:outline-none w-25 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-500 bg-gray-500 rounded text-white px-8 py-2 text-sm"
                    onClick={(e) => {
                        e.preventDefault();

                        if (currentPageNum == 0) {
                            alert("Didn't allow");
                        } else {
                            setIsCosineSimilarityLoaded(false);
                            setCosineSimilarityList([]);
                            setCurrentPageNum(currentPageNum - 1);
                            setLastInput(false);
                        }
                    }}
                >
                    Left
                </div>
                <div
                    className="focus:outline-none w-25 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-500 bg-gray-500 rounded text-white px-8 py-2 text-sm"
                    onClick={(e) => {
                        e.preventDefault();

                        if (
                            (currentPageNum + 1) * maximumCount >
                            workerList.length
                        ) {
                            alert("last page");
                        } else {
                            setIsCosineSimilarityLoaded(false);
                            setCosineSimilarityList([]);
                            setCurrentPageNum(currentPageNum + 1);
                            setLastInput(true);
                        }
                    }}
                >
                    Right
                </div>
            </div>
            wip....
            <div className="mt-10">{ResultList}</div>
        </div>
    );
};

export default CosineSimilarityList;
