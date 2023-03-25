import React, { useState, useEffect } from "react";
import { ArticleItem, ArticleProps } from "../../atom/ArticleItem/ArticleItem";
import { CallGetArticleList } from "../../../grpc/article";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import {
    AutoSizer,
    List,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import { motion } from "framer-motion";

export const ArticleList: React.FC = () => {
    const router = useRouter();
    const [data, setData] = useState<ArticleProps[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    window.onresize = () => cache.clearAll();

    const cache = new CellMeasurerCache({
        // defaultWidth: 500,
        fixedWidth: true,
    });

    useEffect(() => {
        if (!isLoaded) {
            fetchArticleList();
        }
    }, []);

    async function fetchArticleList() {
        CallGetArticleList(router.query.jobId, (message) => {
            const newArticleList: ArticleProps[] = [];

            message.articleList.map((value, _) => {
                const newArticle: ArticleProps = {
                    Id: value.id,
                    Author: value.author,
                    Keyword: value.keyword,
                    Content: value.content,
                    Platform: value.platform,
                    Score_happy: value.scoreHappy,
                    Score_fear: value.scoreFear,
                    Score_embarrassed: value.scoreEmbarrassed,
                    Score_sad: value.scoreSad,
                    Score_rage: value.scoreRage,
                    Score_hurt: value.scoreHurt,
                    Score_max_value: value.scoreMaxValue,
                    Score_max_name: value.scoreMaxName,
                    Create_at: value.createAt,
                    Job_id: value.job_id,
                    Worker_id: value.worker_id,
                };

                newArticleList.push(newArticle);
            });

            newArticleList.sort(function (a, b) {
                return (
                    new Date(b.Create_at).getTime() -
                    new Date(a.Create_at).getTime()
                );
            });

            if (data != newArticleList) {
                setData(newArticleList);
            }

            setIsLoaded(true);
        });
    }

    let ArticleList;

    const rowRenderer = ({ index, key, parent, style }) => {
        return (
            <CellMeasurer
                cache={cache}
                columnIndex={0}
                key={key}
                rowIndex={index}
                parent={parent}
            >
                <motion.div
                    style={style}
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    // exit={{ x: 300, opacity: 0 }}
                    className="w-full h-fit flex justify-center"
                >
                    <ArticleItem
                        Id={data[index].Id}
                        Author={data[index].Author}
                        Keyword={data[index].Keyword}
                        Content={data[index].Content}
                        Platform={data[index].Platform}
                        Score_happy={data[index].Score_happy}
                        Score_fear={data[index].Score_fear}
                        Score_embarrassed={data[index].Score_embarrassed}
                        Score_sad={data[index].Score_sad}
                        Score_rage={data[index].Score_rage}
                        Score_hurt={data[index].Score_hurt}
                        Score_max_value={data[index].Score_max_value}
                        Score_max_name={data[index].Score_max_name}
                        Create_at={data[index].Create_at}
                        Job_id={data[index].Job_id}
                        Worker_id={data[index].Worker_id}
                    ></ArticleItem>
                </motion.div>
            </CellMeasurer>
        );
    };

    if (isLoaded && data != undefined) {
        ArticleList = (
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        deferredMeasurementCache={cache}
                        rowCount={data.length}
                        height={height}
                        rowHeight={cache.rowHeight}
                        width={width}
                        rowRenderer={rowRenderer}
                        overscanRowCount={0}
                    />
                )}
            </AutoSizer>
        );

        if (data == undefined || data.length == 0) {
            ArticleList = <>There's no articles...</>;
        }
    } else {
        ArticleList = (
            <div className="flex flex-col w-full fixed z-30 inset-0 bg-gray-700 flex items-center justify-center">
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <div className="mt-10 text-white text-2xl flex flex-row">
                    Loading articles
                    <div className="writer">
                        <div className="writer-text">...</div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div
            style={{
                width: "95%",
                // height: "calc(var(--vh, 1vh) * 89) ",
                height: "calc(100vh - 100px)",
                WebkitOverflowScrolling: "auto",
                flex: "1 1 auto",
                touchAction: "none",
            }}
        >
            {ArticleList}
        </div>
    );
};

export default ArticleList;
