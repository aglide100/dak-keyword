import React, { useState, useEffect } from "react";
import { ArticleItem, ArticleProps } from "../../atom/ArticleItem/ArticleItem";
import { CallGetArticleList } from "../../../grpc/article";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";

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

            if (data != newArticleList) {
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
    } else {
        ArticleList = data.map((article, index) => {
            if (article.Score_max_name == "None") {
                // pass
            } else {
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
            }
        });
    }
    return <>{ArticleList}</>;
};

export default ArticleList;
