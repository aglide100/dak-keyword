import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export type WorkerProps = {
    workerId: string;
    status: string;
    jobId: string;
    workerKeyword: string;
    updateAt: string;
};

export const WorkerItem = (props: WorkerProps) => {
    return (
        <li
            // layoutId={props.workerId + "_view"}
            className={classNames(
                "flex flex-col items-center pb-10 pt-10 my-5 w-9/12 top-24 rounded-lg bg-white shadow-md",
                {},
            )}
        >
            <div
                className="w-full ml-5 flex flex-col "
                onClick={(ev) => {
                    ev.preventDefault();
                }}
            >
                <div className="mb-1">
                    <span className="font-semibold">Worker Id : </span>
                    {props.workerId}
                </div>
                <div className="mb-1">
                    <span className="font-semibold">keyword : </span>
                    {props.workerKeyword}
                </div>
                <div className="mb-1">
                    <span className="font-semibold">Status : </span>
                    {props.status}
                </div>
                <div className="mb-1">
                    <span className="font-semibold">Update at : </span>
                    {props.updateAt}
                </div>
            </div>
        </li>
    );
};
