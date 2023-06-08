import React, { useEffect, useState } from "react";
import { CallGetWorkers } from "../../../grpc/worker";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { CallGetTfidfScore, CallGetVocabList } from "../../../grpc/similarity";
import TfidfItem from "../TfidfItem/TfidfItem";

type Worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
    UpdateAt: string;
};

export type Vocab = {
    vocabId: number;
    jobId: string;
    workerId: string;
    wordsList: Array<string>;
};

export type Tfidf = {
    WorkerId: string;
    ArticleId: number;
    VocabColumnList: Array<number>;
    ScoreList: Array<number>;
    Id: number;
    VocabId: number;
};

export const TfidfList = () => {
    const router = useRouter();

    const [workerList, setWorkerList] = useState<Worker[]>([]);
    const [workerListLoaded, setWorkerListLoaded] = useState<boolean>(false);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [tfidfList, setTfidfList] = useState<Tfidf[]>([]);
    const [vocabList, setVocabList] = useState<Vocab[]>([]);

    const [isTfidfLoaded, setIsTfidfLoaded] = useState<boolean>(false);

    const maximumCount = 1;
    const [currentPageNum, setCurrentPageNum] = useState<number>(0);

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
                    fetchVocabList(worker.WorkerId);
                    fetchTfidf(worker.WorkerId);
                });

            setIsTfidfLoaded(true);
        }
    }, [workerListLoaded, currentPageNum]);

    async function fetchVocabList(workerId) {
        CallGetVocabList(workerId, (message) => {
            const newVocab: Vocab = message.vocab;

            const prevVocab = vocabList;
            prevVocab.push(newVocab);

            setVocabList((prev) => [...prev, newVocab]);
            // setVocabList(prevVocab);

            // console.log(newVocab);

            console.log(vocabList);
            console.log("!!");
        });
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

    async function fetchTfidf(workerId) {
        if (!workerListLoaded) {
            console.log("worker list didn't loaded");
        } else {
            CallGetTfidfScore(workerId, (message) => {
                const newTfidfScore: Tfidf[] = message.tfidfList.map(
                    (value) => ({
                        WorkerId: value.workerId,
                        ArticleId: value.articleId,
                        VocabColumnList: value.vocabColumnList,
                        ScoreList: value.scoreList,
                        Id: value.id,
                        VocabId: value.vocabId,
                    }),
                );

                setTfidfList((prev) => [...prev, ...newTfidfScore]);
            });
        }
    }

    let ResultList;
    let displayWorkerList;
    if (isLoaded && isTfidfLoaded && tfidfList.length > 0) {
        let prev = tfidfList[0].WorkerId;
        let vocabIndex = 0;
        ResultList = (
            <ul>
                {tfidfList.map((tfidf, idx) => {
                    if (prev != tfidf.WorkerId) {
                        vocabIndex++;
                        prev = tfidf.WorkerId;
                    }

                    return (
                        <div key={"tfidf_" + idx}>
                            <TfidfItem
                                {...tfidf}
                                {...vocabList[vocabIndex]}
                            ></TfidfItem>
                        </div>
                    );
                })}
            </ul>
        );

        displayWorkerList = workerList
            .slice(
                currentPageNum * maximumCount,
                currentPageNum * maximumCount + maximumCount,
            )
            .map((worker) => {
                return <>{worker.WorkerId}</>;
            });
    } else if (isLoaded) {
        ResultList = <>No data...</>;
    } else {
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
                            setIsTfidfLoaded(false);
                            setTfidfList([]);
                            setVocabList([]);
                            setCurrentPageNum(currentPageNum - 1);
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
                            setIsTfidfLoaded(false);
                            setTfidfList([]);
                            setVocabList([]);
                            setCurrentPageNum(currentPageNum + 1);
                        }
                    }}
                >
                    Right
                </div>
            </div>

            <div className="mt-10">{ResultList}</div>
        </div>
    );
};

export default TfidfList;
