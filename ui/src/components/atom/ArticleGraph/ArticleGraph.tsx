import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    CallGetArticleCountByDay,
    CallGetArticleCountByHour,
} from "../../../grpc/article";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";
import Switch from "react-switch";
import { useRouter } from "next/router";

type ArticleCountProto = {
    Create_at: string;
    Count: string;
    Score_max_name: string;
};

type ArticleCount = {
    Create_at: string;
    Count_happy: number;
    Count_fear: number;
    Count_embarrassed: number;
    Count_sad: number;
    Count_rage: number;
    Count_hurt: number;
};

const CountIndexToName = {
    0: "Count_happy",
    1: "Count_fear",
    2: "Count_embarrassed",
    3: "Count_sad",
    4: "Count_rage",
    5: "Count_hurt",
};

const ColorIndex = {
    0: "#FF3333",
    1: "#9933FF",
    2: "#CC6600",
    3: "#0099FF",
    4: "#CC0033",
    5: "#999999",
};

export const ArticleGraph: React.FC = () => {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isClick, setIsClick] = useState<boolean>(false);

    const [dataByDay, setDataByDay] = useState<ArticleCountProto[]>([]);
    const [dataByHour, setDataByHour] = useState<ArticleCountProto[]>([]);

    const [dataCount, setDataCount] = useState<ArticleCount[]>([]);

    const [checkedItems, setCheckedItems] = useState(new Set());
    const [isChecked, setIsChecked] = useState<boolean>(false);

    let renderBarChart;

    useEffect(() => {
        if (!isLoaded && router.isReady) {
            if (isClick) {
                fetchArticleCountByHour();
            } else {
                fetchArticleCountByDay();
            }
        }
    }, [router.isReady]);

    async function fetchArticleCountByDay() {
        CallGetArticleCountByDay(router.query.jobId, (message) => {
            const newArticleCounts: ArticleCountProto[] = [];
            message.articlecountList.map((value, _) => {
                const newArticleCount: ArticleCountProto = {
                    Count: value.count,
                    Create_at: value.createattime,
                    Score_max_name: value.scoremaxname,
                };

                newArticleCounts.push(newArticleCount);
            });

            countArticle(newArticleCounts);
            setDataByDay(newArticleCounts);
            setIsLoaded(true);
        });
    }

    async function fetchArticleCountByHour() {
        CallGetArticleCountByHour(router.query.jobId, (message) => {
            const newArticleCounts: ArticleCountProto[] = [];
            message.articlecountList.map((value, _) => {
                const newArticleCount: ArticleCountProto = {
                    Count: value.count,
                    Create_at: value.createattime,
                    Score_max_name: value.scoremaxname,
                };

                newArticleCounts.push(newArticleCount);
            });

            countArticle(newArticleCounts);
            setDataByHour(newArticleCounts);
            setIsLoaded(true);
        });
    }

    function countArticle(data: ArticleCountProto[]) {
        let count_happy = 0;
        let count_fear = 0;
        let count_embarrassed = 0;
        let count_sad = 0;
        let count_rage = 0;
        let count_hurt = 0;

        // YYYY-MM-DDTHH:mm:ss.sssZ
        const tmpArray = data.sort(function (a, b) {
            if (isClick) {
                return (
                    Date.parse(a.Create_at + "T00:00:00.000Z") -
                    Date.parse(b.Create_at + "T00:00:00.000Z")
                );
            } else {
                const aDate = new Date(
                    a.Create_at.substring(0, 10) +
                        "T" +
                        a.Create_at.substring(11, 14) +
                        ":00:00.000Z",
                ).valueOf();

                const bDate = new Date(
                    b.Create_at.substring(0, 10) +
                        "T" +
                        b.Create_at.substring(11, 14) +
                        ":00:00.000Z",
                ).valueOf();

                return aDate - bDate;
            }
        });

        const countArray = new Array<ArticleCount>();
        let prevCreateAt;
        tmpArray.map((value, index) => {
            if (index == 0) {
                prevCreateAt = value.Create_at;
            } else if (value.Create_at != prevCreateAt && index != 0) {
                countArray.push({
                    Create_at: prevCreateAt,
                    Count_happy: count_happy,
                    Count_fear: count_fear,
                    Count_embarrassed: count_embarrassed,
                    Count_sad: count_sad,
                    Count_rage: count_rage,
                    Count_hurt: count_hurt,
                });

                prevCreateAt = value.Create_at;
                count_happy = 0;
                count_fear = 0;
                count_embarrassed = 0;
                count_sad = 0;
                count_rage = 0;
                count_hurt = 0;
            }

            if (value.Create_at != prevCreateAt) {
                countArray.push({
                    Create_at: prevCreateAt,
                    Count_happy: count_happy,
                    Count_fear: count_fear,
                    Count_embarrassed: count_embarrassed,
                    Count_sad: count_sad,
                    Count_rage: count_rage,
                    Count_hurt: count_hurt,
                });

                prevCreateAt = value.Create_at;
                count_happy = 0;
                count_fear = 0;
                count_embarrassed = 0;
                count_sad = 0;
                count_rage = 0;
                count_hurt = 0;
            } else {
                if (value.Score_max_name == "Happy") {
                    count_happy = parseInt(value.Count);
                }

                if (value.Score_max_name == "Fear") {
                    count_fear = parseInt(value.Count);
                }

                if (value.Score_max_name == "Embarrassed") {
                    count_embarrassed = parseInt(value.Count);
                }

                if (value.Score_max_name == "Sad") {
                    count_sad = parseInt(value.Count);
                }

                if (value.Score_max_name == "Hurt") {
                    count_hurt = parseInt(value.Count);
                }

                if (value.Score_max_name == "Rage") {
                    count_rage = parseInt(value.Count);
                }
            }

            if (index == tmpArray.length - 1) {
                countArray.push({
                    Create_at: prevCreateAt,
                    Count_happy: count_happy,
                    Count_fear: count_fear,
                    Count_embarrassed: count_embarrassed,
                    Count_sad: count_sad,
                    Count_rage: count_rage,
                    Count_hurt: count_hurt,
                });
            }
        });

        setDataCount(countArray);
    }

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkedItemHandler(target.value, target.checked);
    };

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            setCheckedItems(checkedItems.add(id));
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
        }
    };

    const checkElementsBar = [<div key={"checkElementsBar_root"}></div>];
    checkedItems.forEach((value: any) => {
        if (value) {
            const tmp = (
                <Bar
                    key={"Bar_" + value}
                    dataKey={String(CountIndexToName[Number(value)])}
                    fill={String(ColorIndex[Number(value)])}
                    minPointSize={2}
                />
            );
            checkElementsBar.push(tmp);
        }
    });

    const checkBoxList = (
        <ul className="flex flex-row flex-wrap w-full space-x-4">
            {Object.keys(CountIndexToName).map((value, index) => {
                return (
                    <li
                        className="flex ml-2 mb-3 pl-2 pr-2 border-2 "
                        key={index + "check"}
                    >
                        <span>{CountIndexToName[value]}</span>
                        <div className="flex ml-3">
                            <input
                                type={"checkbox"}
                                value={value}
                                onChange={(e) => {
                                    checkHandler(e);
                                }}
                            ></input>
                        </div>
                    </li>
                );
            })}
        </ul>
    );

    if (isLoaded) {
        renderBarChart = (
            <div className="w-full h-full ">
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
                        {checkElementsBar}
                        <Brush />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        renderBarChart = <>fetching data...</>;
    }

    return (
        <motion.li className="flex flex-col items-center">
            <div className="w-full mt-8">
                <div className="ml-10 mb-8 flex">
                    <span className="mr-3">Day</span>
                    <Switch
                        onChange={() => {
                            setIsClick(!isClick);

                            if (isLoaded) {
                                if (!isClick) {
                                    if (dataByHour.length > 0) {
                                        countArticle(dataByHour);
                                    } else {
                                        fetchArticleCountByHour();
                                    }
                                } else {
                                    if (dataByDay.length > 0) {
                                        countArticle(dataByDay);
                                    } else {
                                        fetchArticleCountByDay();
                                    }
                                }
                            } else {
                                if (isClick && router.isReady) {
                                    fetchArticleCountByHour();
                                } else {
                                    fetchArticleCountByDay();
                                }
                            }
                        }}
                        checked={isClick}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={isClick}
                        checkedIcon={isClick}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span className="ml-1">Hour</span>
                </div>

                <div className="flex  w-full content-around">
                    {checkBoxList}
                </div>
                <div className="w-full h-96 mt-20 pr-10">{renderBarChart}</div>
            </div>
        </motion.li>
    );
};

export default ArticleGraph;
