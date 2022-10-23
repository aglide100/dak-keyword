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
    Cell,
    PieChart,
    Pie,
    ResponsiveContainer,
} from "recharts";
import Switch from "react-switch";
import { ArticleProps } from "../ArticleItem/ArticleItem";
import { useRouter } from "next/router";

type ArticleGraphProps = {
    JobId: any;
};

export const ArticleGraph = (props: ArticleGraphProps) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isClick, setClick] = useState<boolean>(false);

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
            <div className="w-full mt-10 flex flex-col justify-content">
                {isClick ? (
                    <>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart
                                width={1000}
                                height={350}
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
                                    dataKey="Score_neg"
                                    stroke="#82ca9d"
                                />

                                <Brush />
                            </LineChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart
                                width={1000}
                                height={350}
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
                            </LineChart>
                        </ResponsiveContainer>
                    </>
                ) : (
                    <>
                        <ResponsiveContainer width="100%" height={350}>
                            <AreaChart
                                width={1000}
                                height={350}
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
                                <Area
                                    type="monotone"
                                    dataKey="Score_neg"
                                    stroke="#82ca9d"
                                    fill="#82ca9d"
                                />

                                <Brush />
                            </AreaChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width="100%" height={350}>
                            <AreaChart
                                width={1000}
                                height={350}
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
                                <Area
                                    type="monotone"
                                    dataKey="Score_pos"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </>
                )}

                <div></div>
            </div>
        );
    } else {
        renderLineChart = <>is loading...</>;
    }

    function handleChange() {
        setClick(!isClick);
    }

    return (
        <motion.li className="flex flex-col items-center">
            <div className="w-full mt-15">
                <div className="ml-10 flex">
                    <span className="mr-3">Area</span>
                    <Switch
                        onChange={() => {
                            handleChange();
                        }}
                        checked={isClick}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span className="ml-3">Graph</span>
                </div>

                {renderLineChart}
            </div>
        </motion.li>
    );
};

export default ArticleGraph;
