import React, { useEffect, useState, lazy, Suspense } from "react";

export type AnalyzerTabComponentDataType = typeof tabList[number];

export type AnalyzerTabComponentProps = {
    componentName: AnalyzerTabComponentDataType;
    isClick: boolean;
};

export const tabList = [
    "VocabList",
    "CosineSimilarity",
    "ArticleGraph",
    "Tfidf",
];

const tabData: Record<
    AnalyzerTabComponentDataType,
    React.LazyExoticComponent<React.FC<AnalyzerTabComponentProps>>
> = {
    VocabList: lazy(() => import("../VocabList/VocabList")),
    CosineSimilarity: lazy(
        () => import("../CosineSimilarity/CosineSimilarity"),
    ),
    ArticleGraph: lazy(() => import("../ArticleGraph/ArticleGraph")),
    Tfidf: lazy(() => import("../TfidfList/TfidfList")),
};

export const TabComponent = (props: AnalyzerTabComponentProps) => {
    const [currentComponent, setCurrentComponent] = useState<React.ReactNode>();

    useEffect(() => {
        const Component = tabData[props.componentName];
        setCurrentComponent(<Component {...props} />);
    }, [props.componentName]);

    if (!currentComponent) {
        return null;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>{currentComponent}</Suspense>
    );
};
