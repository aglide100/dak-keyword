import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon, IconType } from "../Icon/Icon";
import { CallGetArticleList } from "../../../Grpc/article";
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
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";
import Switch from "react-switch";
import { ArticleProps } from "../ArticleItem/ArticleItem";
import { useRouter } from "next/router";

type ArticleGraphProps = {
    JobId: any;
};

type ArticleCount = {
    Create_at: string;
    // Score_max_name: string;
    Count_pos: number;
    Count_neg: number;
    Count_neut: number;
};

export const ArticleGraph = (props: ArticleGraphProps) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const [isClick, setClick] = useState<boolean>(false);

    const router = useRouter();
    const [data, setData] = useState<ArticleProps[]>([]);
    const [dataCount, setDataCount] = useState<ArticleCount[]>([]);

    useEffect(() => {
        if (!isLoaded) {
            //
            fetchArticleList(props.JobId);
        }
    });

    function countArticle() {
        let create_at = "";
        let count_pos = 0;
        let count_neg = 0;
        let count_neut = 0;
        const countArray = new Array<ArticleCount>();
        data.map((value, index) => {
            if (index == 0) {
                create_at = value.Create_at;
            } else {
                if (index == data.length - 1) {
                    countArray.push({
                        Create_at: create_at,
                        Count_pos: count_pos,
                        Count_neg: count_neg,
                        Count_neut: count_neut,
                    });
                }

                if (value.Create_at != create_at) {
                    countArray.push({
                        Create_at: create_at,
                        Count_pos: count_pos,
                        Count_neg: count_neg,
                        Count_neut: count_neut,
                    });

                    create_at = value.Create_at;
                    count_pos = 0;
                    count_neg = 0;
                    count_neut = 0;
                } else {
                    if (value.Score_max_name == "POS") {
                        count_pos++;
                    } else if (value.Score_max_name == "NEG") {
                        count_neg++;
                    } else if (value.Score_max_name == "NEUT") {
                        count_neut++;
                    }
                }
            }
        });
        setDataCount(countArray);
    }

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
                    Score_pos: value.scorePos,
                    Score_neg: value.scoreNeg,
                    Score_neut: value.scoreNeut,
                    Score_comp: value.scoreComp,
                    Score_none: value.scoreNone,
                    Score_max_value: value.scoreMaxValue,
                    Score_max_name: value.scoreMaxName,
                    Create_at: value.createAt.slice(0, 13),
                    Job_id: value.job_id,
                    Worker_id: value.worker_id,
                };

                newArticleList.push(newArticle);
            });

            if (data != newArticleList) {
                setData(newArticleList);
            }

            countArticle();
            setIsLoaded(true);
        });
    }

    let renderLineChart;
    let renderBarChart;

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
                                <CartesianGrid strokeDasharray="5 5" />
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

        renderBarChart = (
            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={dataCount}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="Create_at" />
                        <YAxis orientation="left" stroke="#8884d8" />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="Count_pos"
                            fill="#8884d8"
                            minPointSize={2}
                        />
                        <Bar
                            dataKey="Count_neg"
                            fill="#82ca9d"
                            minPointSize={2}
                        />
                        <Bar
                            dataKey="Count_neut"
                            fill="#ffa500"
                            minPointSize={2}
                        />
                        <Brush />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        renderLineChart = <>is loading...</>;
        renderBarChart = <>is loading...</>;
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
                    <span className="ml-1">Graph</span>
                </div>
                <div>{renderLineChart}</div>

                <div className="mt-20">{renderBarChart}</div>
            </div>
        </motion.li>
    );
};

export default ArticleGraph;
