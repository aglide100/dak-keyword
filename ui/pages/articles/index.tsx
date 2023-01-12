import React from "react";
import dynamic from "next/dynamic";
// import { GetServerSideProps } from "next";

const ArticleList = dynamic(
    () =>
        import("../../src/components/layout/ArticleList/ArticleList").catch(
            (err) => {
                return () => <>Can't load worker list {err}</>;
            },
        ),
    {
        loading: () => <>Loading...</>,
        ssr: false,
    },
);

// interface IHOCProp {
//     jobId?: string;
// }

export const Articles: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col content-around">
            <ArticleList></ArticleList>
        </div>
    );
};

export default Articles;
