import React from "react";
import { Tfidf, Vocab } from "../../layout/TfidfList/TfidfList";

export const TfidfItem = (props: Tfidf & Vocab) => {
    if (
        props.VocabId != props.vocabId &&
        props.VocabId != undefined &&
        props.vocabId != undefined
    ) {
        console.log("Warning wrong vocab!");
        console.log("Tfidf's vocab Id", props.VocabId);
        console.log("Getting vocab Id", props.vocabId);
    }

    let ScoreList;

    if (props.wordsList != undefined) {
        ScoreList = props.VocabColumnList.map((column, idx) => {
            return (
                <div key={column}>
                    {props.wordsList[column]} : {props.ScoreList[idx]}
                </div>
            );
        });
    }

    return (
        <div
            key={props.Id}
            className="tfidf-item border border-gray-300 rounded p-4 mb-4"
        >
            <div className="info-row mb-1">
                <span className="label font-bold">Article ID:</span>{" "}
                {props.ArticleId}
            </div>
            <div>{ScoreList}</div>
        </div>
    );
};

export default TfidfItem;
