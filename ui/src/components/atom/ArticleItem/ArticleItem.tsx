import React from "react";
import { motion } from "framer-motion";
import { Icon, IconType } from "../Icon/Icon";

export type ArticleProps = {
    Id: string;
    Author: string;
    Keyword: string;
    Content: string;
    Platform: string;
    Score_happy: string;
    Score_fear: string;
    Score_embarrassed: string;
    Score_sad: string;
    Score_rage: string;
    Score_hurt: string;
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
                            <span className="font-semibold">기쁨 : </span>
                            {props.Score_happy}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">분노 : </span>
                            {props.Score_fear}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">당황 : </span>
                            {props.Score_embarrassed}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">슬픔 : </span>
                            {props.Score_sad}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">분노 : </span>
                            {props.Score_rage}
                        </div>
                        <div className="flex flex-row">
                            <span className="font-semibold">상처 : </span>
                            {props.Score_hurt}
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
