import React from "react";
import dynamic from "next/dynamic";

const ArticleGraph = dynamic(
    () =>
        import("../../src/components/atom/ArticleGraph/ArticleGraph").catch(
            (err) => {
                return () => <>Can't load worker list {err}</>;
            },
        ),
    {
        loading: () => <></>,
        ssr: true,
    },
);

export const Articles: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col content-around">
            <ArticleGraph></ArticleGraph>
        </div>
    );
};

export default Articles;
