import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

const ArticleList = dynamic(
    () =>
        import("../../src/components/layout/ArticleList/ArticleList").catch(
            (err) => {
                return () => <>Can't load worker list</>;
            },
        ),
    {
        loading: () => <>Loading...</>,
        ssr: false,
    },
);

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { jobId } = query;
    return {
        props: {
            jobId,
        },
    };
};

interface IHOCProp {
    jobId?: string;
}

export const Articles: React.FC<IHOCProp> = ({ jobId }) => {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col content-around">
            <div>Hell {jobId}</div>
            <div></div>
            <ArticleList JobId={jobId}></ArticleList>
        </div>
    );
};

export default Articles;
