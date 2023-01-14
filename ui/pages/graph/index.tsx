import React from "react";
import dynamic from "next/dynamic";
import { ComponentLoading } from "../../src/components/atom/ComponentLoading/ComponentLoading";
// import { GetServerSideProps } from "next";

const ArticleGraph = dynamic(
    () =>
        import("../../src/components/atom/ArticleGraph/ArticleGraph").catch(
            (err) => {
                return () => <>Can't load worker list {err}</>;
            },
        ),
    {
        loading: () => <></>,
        ssr: false,
    },
);

// interface IHOCProp {
//     jobId?: string;
// }

export const Articles: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col content-around">
            <ArticleGraph></ArticleGraph>
        </div>
    );
};

export default Articles;
