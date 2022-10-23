import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon, IconType } from "../Icon/Icon";
import { makeGetArticleList } from "../../../grpc/article";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from "recharts";

import { ArticleProps } from "../ArticleItem/ArticleItem";
import { useRouter } from "next/router";

// const data: ArticleProps[] = [
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "0",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "1",
//         Score_none: "0",
//         Score_max_value: "1",
//         Score_max_name: "comp",
//         Create_at: "2022-10-23T02:11:48.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "0",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "1",
//         Score_none: "0",
//         Score_max_value: "1",
//         Score_max_name: "comp",
//         Create_at: "2022-10-23T01:58:48.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "0",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "1",
//         Score_none: "0",
//         Score_max_value: "1",
//         Score_max_name: "comp",
//         Create_at: "2022-10-23T01:44:11.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "0",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "1",
//         Score_none: "0",
//         Score_max_value: "1",
//         Score_max_name: "comp",
//         Create_at: "2022-10-23T01:43:02.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "1",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "0",
//         Score_none: "0",
//         Score_max_value: "1",
//         Score_max_name: "pos",
//         Create_at: "2022-10-23T01:25:11.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "0",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "1",
//         Score_none: "0",
//         Score_max_value: "0.99",
//         Score_max_name: "comp",
//         Create_at: "2022-10-22T23:32:09.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
//     {
//         Id: "1",
//         Author: "test",
//         Keyword: "test",
//         Content: "test",
//         Platform: "tweet",
//         Score_pos: "0",
//         Score_neg: "0",
//         Score_neut: "0",
//         Score_comp: "1",
//         Score_none: "0",
//         Score_max_value: "0.75",
//         Score_max_name: "comp",
//         Create_at: "2022-10-T23:35:40.000Z",
//         Job_id: "",
//         Worker_id: "",
//     },
// ];

type ArticleGraphProps = {
    JobId: any;
};

export const ArticleGraph = (props: ArticleGraphProps) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const router = useRouter();
    const [data, setData] = useState<ArticleProps[]>([]);

    useEffect(() => {
        if (!isLoaded) {
            //
            fetchArticleList(props.JobId);
        }
    });

    async function fetchArticleList(jobId) {
        console.log(jobId);
        makeGetArticleList(router.query.jobId, (message) => {
            const newArticleList: ArticleProps[] = [];

            message.articleList.map((value, _) => {
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

    let renderLineChart;

    if (isLoaded) {
        renderLineChart = (
            <div className="w-full mt-10">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={1000}
                        height={500}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Create_at" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="Score_pos"
                            stroke="#8884d8"
                        />

                        <Line
                            type="monotone"
                            dataKey="Score_neg"
                            stroke="#82ca9d"
                        />
                        <Brush />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={1000}
                        height={500}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="Score_neg"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="Score_pos"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        renderLineChart = <>is loading...</>;
    }

    return (
        <motion.li className="flex flex-col items-center">
            {/* <LineChart width={600} height={300} data={data}>
                <Line
                    type="monotone"
                    dataKey="Score_max_name"
                    stroke="#8884d8"
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="Score_max_name" />
                <YAxis />
            </LineChart> */}
            <div className="w-full mt-20">{renderLineChart}</div>
        </motion.li>
    );
};

export default ArticleGraph;
