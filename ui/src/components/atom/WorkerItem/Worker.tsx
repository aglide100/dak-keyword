import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export type WorkerProps = {
    workerId: string;
    status: string;
    jobId: string;
    workerKeyword: string;
};

export const WorkerItem = (props: WorkerProps) => {
    return (
        <>
            <motion.li
                layoutId={props.workerId + "_view"}
                className={classNames(
                    "flex flex-col items-center pb-10 pt-10 mt-10 w-9/12 top-24 rounded-lg bg-white shadow-md",
                    {},
                )}
            >
                <div
                    className="w-full ml-5 flex flex-col "
                    onClick={(ev) => {
                        ev.preventDefault();
                    }}
                >
                    <div className="mb-1">WorkerId: {props.workerId}</div>
                    <div className="mb-1">
                        Worker keyword: {props.workerKeyword}
                    </div>
                    <div className="mb-1">Status: {props.status}</div>
                </div>
            </motion.li>
        </>
    );
};
