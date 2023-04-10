import React, { useEffect, useState, useRef } from "react";
import { CallGetWorkers } from "../../../grpc/worker";
import { WorkerItem } from "../../atom/WorkerItem/WorkerItem";
import { useRouter } from "next/router";
import {
    AutoSizer,
    List,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import { motion } from "framer-motion";

type worker = {
    WorkerId: string;
    Status: string;
    JobId: string;
    Keyword: string;
    UpdateAt: string;
};

const WorkerList: React.FC<{ JobId }> = ({ JobId }) => {
    const [data, setData] = useState<worker[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [number, setNumber] = useState(0);
    const number_ref = useRef(0);
    const router = useRouter();

    const cache = new CellMeasurerCache({
        // defaultWidth: 500,
        fixedWidth: true,
    });

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
                return (
                    new Date(b.UpdateAt).getTime() -
                    new Date(a.UpdateAt).getTime()
                );
            });

            setData(newWorkerList);

            setIsLoaded(true);
        });
    }

    let WorkerList;

    const rowRenderer = ({ index, key, parent, style }) => {
        return (
            <CellMeasurer
                cache={cache}
                columnIndex={0}
                key={key}
                rowIndex={index}
                parent={parent}
            >
                <motion.div
                    style={style}
                    className="w-full h-fit flex justify-center mb-5"
                >
                    <WorkerItem
                        workerId={data[index].WorkerId}
                        status={data[index].Status}
                        jobId={data[index].JobId}
                        workerKeyword={data[index].Keyword}
                        updateAt={data[index].UpdateAt}
                    ></WorkerItem>
                </motion.div>
            </CellMeasurer>
        );
    };
    if (!isLoaded) {
        WorkerList = (
            <div className="w-full flex justify-center mt-10">
                is loading...
            </div>
        );
    } else {
        if (data != undefined) {
            WorkerList = (
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            deferredMeasurementCache={cache}
                            rowCount={data.length}
                            height={height}
                            rowHeight={cache.rowHeight}
                            width={width}
                            rowRenderer={rowRenderer}
                            overscanRowCount={1}
                        />
                    )}
                </AutoSizer>
            );
        }

        // WorkerList = data.map((job, index) => {
        //     return (
        //         <div key={"job" + index} className="w-full flex justify-center">
        //             <WorkerItem
        //                 workerId={job.WorkerId}
        //                 status={job.Status}
        //                 jobId={job.JobId}
        //                 workerKeyword={job.Keyword}
        //                 updateAt={job.UpdateAt}
        //             ></WorkerItem>
        //         </div>
        //     );
        // });

        if (data == undefined || data.length <= 0) {
            WorkerList = <>There's no worker...</>;
        }
    }

    return <>{WorkerList}</>;
};

export default WorkerList;
