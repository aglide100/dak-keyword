import React, { useState, useEffect } from "react";
import { ArticleItem, ArticleProps } from "../../atom/ArticleItem/ArticleItem";
import { CallGetArticleList } from "../../../grpc/article";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { AutoSizer, List } from "react-virtualized";
import useWindowDimensions from "../../../Hooks/getWindowDimension";

export const ArticleList: React.FC = () => {
    const router = useRouter();
    const [data, setData] = useState<ArticleProps[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { height } = useWindowDimensions();

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

    const rowRanderer = ({ index, style }) => {
        const article = data[index];
        // console.log(index);
        return (
            <div
                style={style}
                key={"article" + index}
                className="w-full flex justify-center"
            >
                <ArticleItem
                    Id={article.Id}
                    Author={article.Author}
                    Keyword={article.Keyword}
                    Content={article.Content}
                    Platform={article.Platform}
                    Score_happy={article.Score_happy}
                    Score_fear={article.Score_fear}
                    Score_embarrassed={article.Score_embarrassed}
                    Score_sad={article.Score_sad}
                    Score_rage={article.Score_rage}
                    Score_hurt={article.Score_hurt}
                    Score_max_value={article.Score_max_value}
                    Score_max_name={article.Score_max_name}
                    Create_at={article.Create_at}
                    Job_id={article.Job_id}
                    Worker_id={article.Worker_id}
                ></ArticleItem>
            </div>
        );
    };

    if (isLoaded && data != undefined) {
        ArticleList = (
            <AutoSizer AutoSizer>
                {({ width }) => (
                    <List
                        rowCount={data.length}
                        height={height}
                        rowHeight={490}
                        width={width}
                        rowRenderer={rowRanderer}
                        overscanRowCount={10}
                    />
                )}
            </AutoSizer>
        );

        if (data == undefined || data.length == 0) {
            ArticleList = <>There's no articles...</>;
        }
    } else {
        ArticleList = (
            <div className="w-full h-full flex justify-center mt-10">
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
            </div>
        );
    }
    return <>{ArticleList}</>;
};

export default ArticleList;
