// import React, { useEffect, useState } from "react";
import React from "react";
// import { useRouter } from "next/router";
// import { CallGetVocabList } from "../../../grpc/similarity";
// import Calendar from "react-calendar";
// import moment from "moment";

// type Worker = {
//     WorkerId: string;
//     Status: string;
//     JobId: string;
//     Keyword: string;
//     UpdateAt: string;
// };

export const VocabList = () => {
    // const [value, onChange] = useState(new Date());

    // const router = useRouter();

    // const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // const [workerList, setWorkerList] = useState<Worker[]>([]);
    // const [workerListLoaded, setWorkerListLoaded] = useState<boolean>(false);

    // const [isVocabListLoaded, setIsVocabListLoaded] = useState<boolean>(false);

    // const maximumCount = 1;
    // const [currentPageNum, setCurrentPageNum] = useState<number>(0);

    // useEffect(() => {
    //     if (workerListLoaded && router.isReady) {
    //         workerList
    //             .slice(
    //                 currentPageNum * maximumCount,
    //                 currentPageNum * maximumCount + maximumCount,
    //             )
    //             .forEach((worker) => {
    //                 fetchVocabList(worker.WorkerId);
    //             });

    //         setIsVocabListLoaded(true);
    //     }
    // }, [workerListLoaded, currentPageNum]);

    // async function fetchVocabList(workerId) {
    //     try {
    //         CallGetVocabList(workerId, (message) => {
    //             console.log(message);
    //         });
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // }
    return (
        <div className="w-full h-full">
            <div>
                {/* <Calendar onChange={onChange} value={value} />
                <div className="text-gray-500 mt-4">
                    {moment(value).format("YYYY년 MM월 DD일")}
                </div> */}
            </div>
            VocabList wip...
        </div>
    );
};

export default VocabList;
