import React, { useState, useEffect } from "react";
import { ArticleItem, ArticleProps } from "../../atom/ArticleItem/ArticleItem";
import { makeGetArticleList } from "../../../grpc/article";
import { useRouter } from "next/router";

type ArticleListProps = {
    JobId: any;
};

export const ArticleList: React.FC<ArticleListProps> = (JobId) => {
    const router = useRouter();
    const [data, setData] = useState<ArticleProps[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (!isLoaded) {
            fetchArticleList(JobId);
        }
    }, []);

    async function fetchArticleList(jobId) {
        makeGetArticleList(router.query.jobId, (message) => {
            const newArticleList: ArticleProps[] = [];

            message.articleList.map((value, idx) => {
                const newArticle: ArticleProps = {
                    Id: value.id,
                    Author: value.author,
                    Keyword: value.keyword,
                    Content: value.content,
                    Platform: value.platform,
                    Score_pos: value.scorePos,
                    Score_neg: value.scoreNeg,
                    Score_neut: value.scoreNeut,
                    Score_comp: value.scoreComp,
                    Score_none: value.scoreNone,
                    Score_max_value: value.scoreMaxValue,
                    Score_max_name: value.scoreMaxName,
                    Job_id: value.job_id,
                    Worker_id: value.worker_id,
                };

                newArticleList.push(newArticle);

                console.log("@@@@@", newArticle);
            });

            if (data != newArticleList) {
                console.log("@@@", newArticleList);
                setData(newArticleList);
            }

            setIsLoaded(true);
        });
    }

    let ArticleList;
    if (
        data == null ||
        data == undefined ||
        data.length == 0 ||
        JobId == undefined
    ) {
        ArticleList = (
            <div className="w-full flex justify-center mt-10">
                Can't find articles!
            </div>
        );
    } else {
        ArticleList = data.map((article, index) => {
            return (
                <div
                    key={"article" + index}
                    className="w-full flex justify-center"
                >
                    <ArticleItem
                        Id={article.Id}
                        Author={article.Author}
                        Keyword={article.Keyword}
                        Content={article.Content}
                        Platform={article.Platform}
                        Score_pos={article.Score_pos}
                        Score_neg={article.Score_neg}
                        Score_neut={article.Score_neut}
                        Score_comp={article.Score_comp}
                        Score_none={article.Score_none}
                        Score_max_value={article.Score_max_value}
                        Score_max_name={article.Score_max_name}
                        Job_id={article.Job_id}
                        Worker_id={article.Worker_id}
                    ></ArticleItem>
                </div>
            );
        });
    }
    return <>{ArticleList}</>;
};

export default ArticleList;
