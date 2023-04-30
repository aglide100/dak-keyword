import React from "react";
import { VocabList } from "../../atom/VocabList/VocabList";
import { Similarity } from "../../atom/Similarity/Similarity";
import ArticleGraph from "../../atom/ArticleGraph/ArticleGraph";

export type AnalyzerTabComponentDataType = typeof tabList[number];

export type AnalyzerTabComponentProps = {
    componentName: AnalyzerTabComponentDataType;
    isClick: boolean;
};

export const tabList = ["VocabList", "Similarity", "ArticleGraph"];

export const tabData = {
    VocabList: React.createFactory(VocabList),
    Similarity: React.createFactory(Similarity),
    ArticleGraph: React.createFactory(ArticleGraph),
};

export const TabComponent = (props: AnalyzerTabComponentProps) => {
    return tabData[props.componentName](props);
};
