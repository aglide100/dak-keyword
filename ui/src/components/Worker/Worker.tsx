import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { useRouter } from "next/router";

export type WorkerProps = {
  id: string;
  status: string;
  keyword: string;
  owner: string;
  date: string;
};

export const WorkerItem = (props: WorkerProps) => {

  const router = useRouter();

  return (
    <>
      <motion.li
        layoutId={props.id + "_view"}
        className={classNames(
          "flex flex-col items-center pb-10 pt-10 mt-10 w-9/12 top-24 rounded-lg bg-white shadow-md" ,
          {
          }
        )}
      >
        <div className="w-full ml-5 flex flex-col "
            onClick={(ev) => {
                ev.preventDefault();

                router.push({
                  pathname: "/Worker",
                  query: { WorkerId: props.id},
                });
        }}>
            <div className="mb-1">Status: {props.status}</div>
            <div className="mb-1">Keyword: {props.keyword}</div>
            <div className="mb-1">Owner: {props.owner}</div>
            <div className="mb-1">Created at: {props.date}</div>
        </div>
       
      </motion.li>
    </>
  );
};