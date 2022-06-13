import React from "react";

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
    Job_id: string;
    Worker_id: string;
};

export const ArticleItem = (props: ArticleProps) => {
    return (
        <div className="flex flex-col w-full mt-10">
            <div>Author : {props.Author}</div>
            <div>Keyword : {props.Keyword}</div>
            <div>Platform : {props.Platform}</div>
            <div className="flex flex-col">
                <div>Score</div>
                <div className="flex flex-row">
                    Max Score : {props.Score_max_name} = {props.Score_max_value}
                </div>
                <div className="flex flex-row">
                    Pos : {props.Score_pos} Neg : {props.Score_neg} Neut :{" "}
                    {props.Score_neut} Comp : {props.Score_comp} None :{" "}
                    {props.Score_none}
                </div>
            </div>
        </div>
    );
};
