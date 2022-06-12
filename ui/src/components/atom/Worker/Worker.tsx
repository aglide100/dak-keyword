import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { useRouter } from "next/router";

export type WorkerProps = {
    workerId: string;
    status: string;
    jobId: string;
};

export const WorkerItem = (props: WorkerProps) => {
    const router = useRouter();

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

                        router.push({
                            pathname: "/job",
                            query: { jobId: props.workerId },
                        });
                    }}
                >
                    <div className="mb-1">WorkerId: {props.workerId}</div>
                    <div className="mb-1">Status: {props.status}</div>
                </div>
            </motion.li>
        </>
    );
};
