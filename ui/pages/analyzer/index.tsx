import React, { useState } from "react";
import { TabComponent } from "../../src/components/layout/AnalyzerTabComponent/AnalyzerTabComponent";
import { motion, AnimatePresence } from "framer-motion";
import classnames from "classnames";

export const Analyzer: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<string>("ArticleGraph");

    return (
        <div className="w-full h-full">
            <div className="flex flex-wrap font-medium text-center text-gray-500 border-b border-gray-300 ml-3 mt-2 dark:border-gray-700 dark:text-gray-400">
                <div
                    className={classnames("mr-2", {
                        "inline-block p-4 text-blue-600 bg-gray-50 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 border":
                            currentTab == "ArticleGraph",
                        "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                            currentTab != "ArticleGraph",
                    })}
                    onClick={(e) => {
                        e.preventDefault();

                        setCurrentTab("ArticleGraph");
                    }}
                >
                    ArticleGraph
                </div>
                <div
                    className={classnames("mr-2", {
                        "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":
                            currentTab == "VocabList",
                        "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                            currentTab != "VocabList",
                    })}
                    onClick={(e) => {
                        e.preventDefault();

                        setCurrentTab("VocabList");
                    }}
                >
                    VocabList
                </div>
                <div
                    className={classnames("mr-2", {
                        "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":
                            currentTab == "Similarity",
                        "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300":
                            currentTab != "Similarity",
                    })}
                    onClick={(e) => {
                        e.preventDefault();

                        setCurrentTab("Similarity");
                    }}
                >
                    Similarity
                </div>
            </div>
            <div className="w-full h-full">
                <AnimatePresence>
                    <motion.div
                        key={currentTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <TabComponent
                            componentName={currentTab}
                            isClick={false}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Analyzer;
