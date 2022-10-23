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
            className="flex flex-col items-center pb-10 pt-10  mt-10 w-9/12 top-24 rounded-lg bg-white shadow-md"
        >
            <div className="w-full ml-5 flex flex-col mr-2 ">
                <div>Author : {props.Author}</div>
                <div>Keyword : {props.Keyword}</div>

                <div className="flex flex-row">
                    Platform :
                    {props.Platform === "tweet" ? (
                        <div className="w-5 h-5 ml-2">
                            <Icon icon="twitter" />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div>Contnet : {props.Content}</div>
                <div>Create_at : {props.Create_at}</div>
                <div className="flex flex-col mt-5">
                    <div>Score</div>
                    <div className="flex flex-row">
                        Max Score : {props.Score_max_name}
                    </div>
                    <div className="flex flex-row">
                        Pos : {props.Score_pos} Neg : {props.Score_neg} Neut :{" "}
                        {props.Score_neut} Comp : {props.Score_comp} None :{" "}
                        {props.Score_none}
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
