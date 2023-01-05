import React from "react";
import { motion } from "framer-motion";
import { Icon, IconType } from "../Icon/Icon";

export type ArticleProps = {
    Id: string;
    Author: string;
    Keyword: string;
    Content: string;
    Platform: string;
    Score_pos: string;
    Score_neg: string;
    Score_neut: string;
    Score_comp: string;
    Score_none: string;
    Score_max_value: string;
    Score_max_name: string;
    Create_at: string;
    Job_id: string;
    Worker_id: string;
};

export const ArticleItem = (props: ArticleProps) => {
    return (
        <motion.li
            layoutId={props.Id + "_view"}
            className="flex flex-col items-center pb-10 pt-10 pl-5 pr-5 mt-10 w-9/12 top-24 rounded-lg bg-white shadow-md"
        >
            <div className="w-full ml-5 flex flex-col mr-2 ">
                <div>
                    <span className="font-semibold">Author : </span>
                    {props.Author}
                </div>
                <div>
                    <span className="font-semibold">Keyword : </span>
                    {props.Keyword}
                </div>

                <div className="flex flex-row">
                    <span className="font-semibold">Platform : </span>
                    {props.Platform === "tweet" ? (
                        <div className="w-5 h-5 ml-2">
                            <Icon icon="twitter" />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <span className="font-semibold">Contnet : </span>
                    {props.Content}
                </div>
                <div>
                    <span className="font-semibold">Create_at : </span>
                    {props.Create_at}
                </div>
                <div className="flex flex-col mt-5">
                    <div>
                        <span className="font-semibold">Score</span>
                    </div>
                    <div className="flex flex-row mb-2">
                        <span className="font-semibold">Max Score : </span>
                        {props.Score_max_name}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <span className="font-semibold">Pos : </span>
                            {props.Score_pos}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">Neg : </span>
                            {props.Score_neg}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">Neut : </span>
                            {props.Score_neut}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">Comp : </span>
                            {props.Score_comp}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">None : </span>
                            {props.Score_none}
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
