import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { useRouter } from "next/router";

export type JobProps = {
    id: string;
    status: string;
    keyword: string;
    owner: string;
    date: string;
};

export const JobItem = (props: JobProps) => {
    const router = useRouter();

    return (
        <>
            <motion.li
                layoutId={props.id + "_view"}
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
                            query: { jobId: props.id },
                        });
                    }}
                >
                    <div className="mb-1">
                        <span className="font-semibold">Status: </span>
                        {props.status}
                    </div>
                    <div className="mb-1">
                        <span className="font-semibold">Keyword : </span>
                        {props.keyword}
                    </div>
                    <div className="mb-1">
                        <span className="font-semibold">Owner : </span>
                        {props.owner}
                    </div>
                    <div className="mb-1">
                        <span className="font-semibold">Created at : </span>
                        {props.date}
                    </div>
                </div>
            </motion.li>
        </>
    );
};
