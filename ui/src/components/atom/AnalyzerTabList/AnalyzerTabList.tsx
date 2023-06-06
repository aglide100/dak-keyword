import React from "react";
import classnames from "classnames";

export type AnalyzerTabListProps = {
    currentTab: string;
    onClick(e: any, tabName: string): void;
};

export const AnalyzerTabList = (props: AnalyzerTabListProps) => {
    return (
        <div className="flex flex-wrap font-medium text-center text-gray-500 border-b border-gray-300 ml-3 mt-2 dark:border-gray-700 dark:text-gray-400">
            <div
                className={classnames("mr-2", {
                    "inline-block p-4 text-blue-600 bg-gray-50 rounded-t-lg active dark:text-blue-500 border":
                        props.currentTab == "ArticleGraph",
                    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                        props.currentTab != "ArticleGraph",
                })}
                onClick={(e) => {
                    props.onClick(e, "ArticleGraph");
                }}
            >
                ArticleGraph
            </div>
            <div
                className={classnames("mr-2", {
                    "inline-block p-4 text-blue-600 bg-gray-50 rounded-t-lg active dark:text-blue-500 border":
                        props.currentTab == "VocabList",
                    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                        props.currentTab != "VocabList",
                })}
                onClick={(e) => {
                    props.onClick(e, "VocabList");
                }}
            >
                VocabList
            </div>
            <div
                className={classnames("mr-2", {
                    "inline-block p-4 text-blue-600 bg-gray-50 rounded-t-lg active dark:text-blue-500 border":
                        props.currentTab == "CosineSimilarity",
                    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                        props.currentTab != "CosineSimilarity",
                })}
                onClick={(e) => {
                    props.onClick(e, "CosineSimilarity");
                }}
            >
                CosineSimilarity
            </div>
            <div
                className={classnames("mr-2", {
                    "inline-block p-4 text-blue-600 bg-gray-50 rounded-t-lg active dark:text-blue-500 border":
                        props.currentTab == "Tfidf",
                    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                        props.currentTab != "Tfidf",
                })}
                onClick={(e) => {
                    props.onClick(e, "Tfidf");
                }}
            >
                Tfidf
            </div>
        </div>
    );
};

export default AnalyzerTabList;
