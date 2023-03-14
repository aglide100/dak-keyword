import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Icon, IconType } from "../Icon/Icon";
import {
    CallGetArticleCountByDay,
    CallGetArticleList,
} from "../../../grpc/article";
import {
    // LineChart,
    // Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    // AreaChart,
    // Area,
    // Cell,
    // PieChart,
    // Pie,
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";
import Switch from "react-switch";
import { ArticleProps } from "../ArticleItem/ArticleItem";
import { useRouter } from "next/router";

type ArticleCountProto = {
    Create_at: string;
    Count: number;
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

    const [data, setData] = useState<ArticleCountProto[]>([]);
    const [dataCount, setDataCount] = useState<ArticleCount[]>([]);

    const [checkedItems, setCheckedItems] = useState(new Set());
    const [isChecked, setIsChecked] = useState(false);

    let renderBarChart;

    useEffect(() => {
        if (!isLoaded) {
            fetchArticleCountByDay();
        }
    });

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

            if (data != newArticleCounts) {
                setData(newArticleCounts);
                countArticle();
            }

            setIsLoaded(true);
        });
    }

    function countArticle() {
        console.log("!!!!", data);
        let create_at = "";
        let count_happy = 0;
        let count_fear = 0;
        let count_embarrassed = 0;
        let count_sad = 0;
        let count_rage = 0;
        let count_hurt = 0;

        const tmpArray = data.sort(function (a, b) {
            return (
                new Date(a.Create_at).valueOf() -
                new Date(b.Create_at).valueOf()
            );
        });

        const countArray = new Array<ArticleCount>();

        tmpArray.map((value, index) => {
            if (index == data.length - 1) {
                countArray.push({
                    Create_at: create_at,
                    Count_happy: count_happy,
                    Count_fear: count_fear,
                    Count_embarrassed: count_embarrassed,
                    Count_sad: count_sad,
                    Count_rage: count_rage,
                    Count_hurt: count_hurt,
                });
            }

            const check = value.Create_at;

            if (check != create_at) {
                countArray.push({
                    Create_at: create_at,
                    Count_happy: count_happy,
                    Count_fear: count_fear,
                    Count_embarrassed: count_embarrassed,
                    Count_sad: count_sad,
                    Count_rage: count_rage,
                    Count_hurt: count_hurt,
                });
                create_at = value.Create_at;

                count_happy = 0;
                count_fear = 0;
                count_embarrassed = 0;
                count_sad = 0;
                count_rage = 0;
                count_hurt = 0;
            } else {
                if (value.Score_max_name == "Happy") {
                    count_happy++;
                }

                if (value.Score_max_name == "Fear") {
                    count_fear++;
                }

                if (value.Score_max_name == "Embarrassed") {
                    count_embarrassed++;
                }

                if (value.Score_max_name == "Sad") {
                    count_sad++;
                }

                if (value.Score_max_name == "Hurt") {
                    count_rage++;
                }

                if (value.Score_max_name == "Rage") {
                    count_hurt++;
                }
            }

            setDataCount(countArray);
        });

        console.log(countArray);
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
        <>
            {Object.keys(CountIndexToName).map((value) => {
                return (
                    <li
                        className="flex flex-row ml-2 pl-2 pr-2 border-2 "
                        key={value}
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
        </>
    );

    if (isLoaded && data.length > 1) {
        renderBarChart = (
            <div className="w-full h-full">
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
                    <span className="mr-3">Time</span>
                    <Switch
                        onChange={() => {
                            setIsClick(!isClick);
                            countArticle();
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
                    <span className="ml-1">Day</span>
                </div>

                {/* <div className="flex flex-row flex-wrap w-full content-around">
                    {checkBoxList}
                </div>
                <div className="w-full h-96 mt-20 pr-10">{renderBarChart}</div> */}
            </div>
        </motion.li>
    );
};

export default ArticleGraph;
