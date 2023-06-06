import React, { useState } from "react";
import { TabComponent } from "../../src/components/atom/AnalyzerTabComponent/AnalyzerTabComponent";
import { motion, AnimatePresence } from "framer-motion";
import AnalyzerTabList from "../../src/components/atom/AnalyzerTabList/AnalyzerTabList";

export const Analyzer: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<string>("ArticleGraph");

    return (
        <div className="w-full h-full">
            <AnalyzerTabList
                currentTab={currentTab}
                onClick={(e, tabName) => {
                    e.preventDefault();

                    setCurrentTab(tabName);
                }}
            ></AnalyzerTabList>
            <div className="w-full h-full">
                <AnimatePresence>
                    <motion.div
                        key={currentTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
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
