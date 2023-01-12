import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Icon, IconType } from "../Icon/Icon";
import { CallGetArticleList } from "../../../grpc/article";
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

export const ArticleGraph = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const router = useRouter();
    const [isClick, setClick] = useState<boolean>(false);

    const [data, setData] = useState<ArticleProps[]>([]);
    const [dataCount, setDataCount] = useState<ArticleCount[]>([]);

    const [checkedItems, setCheckedItems] = useState(new Set());
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            fetchArticleList(router.query.jobId);
        }
    });

    function countArticle() {
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
            if (index == 0) {
                if (isClick) {
                    create_at = value.Create_at;
                } else {
                    create_at = value.Create_at.slice(0, 11);
                }
            } else {
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

                let check;
                if (isClick) {
                    check = value.Create_at;
                } else {
                    check = value.Create_at.slice(0, 11);
                }

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

                    // create_at = value.Create_at;
                    if (isClick) {
                        create_at = value.Create_at;
                    } else {
                        create_at = value.Create_at.slice(0, 11);
                    }
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
            }
        });
        setDataCount(countArray);
    }

    async function fetchArticleList(jobId) {
        CallGetArticleList(jobId, (message) => {
            const newArticleList: ArticleProps[] = [];

            message.articleList.map((value, _) => {
                const newArticle: ArticleProps = {
                    Id: value.id,
                    Author: "",
                    Keyword: "",
                    Content: "",
                    Platform: value.platform,
                    Score_happy: value.scoreHappy,
                    Score_fear: value.scoreFear,
                    Score_embarrassed: value.scoreEmbarrassed,
                    Score_sad: value.scoreSad,
                    Score_rage: value.scoreRage,
                    Score_hurt: value.scoreHurt,
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
            // console.log(data);
            countArticle();
            setIsLoaded(true);
        });
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

    // let renderLineChart;
    let renderBarChart;

    const elements = [<></>];
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
            elements.push(tmp);
        }
    });

    const checkBoxList = (
        <div className="flex flex-row">
            {Object.keys(CountIndexToName).map((value) => {
                return (
                    <div
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
                    </div>
                );
            })}
        </div>
    );

    if (isLoaded) {
        // renderLineChart = (
        //     <div className="w-full mt-10 flex flex-col justify-content">
        //         {isClick ? (
        //             <>
        //                 <ResponsiveContainer width="100%" height={350}>
        //                     <LineChart
        //                         width={1000}
        //                         height={350}
        //                         data={data}
        //                         syncId="anyId"
        //                         margin={{
        //                             top: 10,
        //                             right: 30,
        //                             left: 0,
        //                             bottom: 0,
        //                         }}
        //                     >
        //                         <CartesianGrid strokeDasharray="5 5" />
        //                         <XAxis dataKey="Create_at" />
        //                         <YAxis />
        //                         <Tooltip />
        //                         <Line
        //                             type="monotone"
        //                             dataKey="Score_neg"
        //                             stroke="#82ca9d"
        //                         />

        //                         <Brush />
        //                     </LineChart>
        //                 </ResponsiveContainer>
        //                 <ResponsiveContainer width="100%" height={350}>
        //                     <LineChart
        //                         width={1000}
        //                         height={350}
        //                         data={data}
        //                         syncId="anyId"
        //                         margin={{
        //                             top: 10,
        //                             right: 30,
        //                             left: 0,
        //                             bottom: 0,
        //                         }}
        //                     >
        //                         <CartesianGrid strokeDasharray="3 3" />
        //                         <XAxis dataKey="Create_at" />
        //                         <YAxis />
        //                         <Tooltip />
        //                         <Line
        //                             type="monotone"
        //                             dataKey="Score_happy"
        //                             stroke="#8884d8"
        //                         />
        //                     </LineChart>
        //                 </ResponsiveContainer>
        //             </>
        //         ) : (
        //             <>
        //                 <ResponsiveContainer width="100%" height={350}>
        //                     <AreaChart
        //                         width={1000}
        //                         height={350}
        //                         data={data}
        //                         syncId="anyId"
        //                         margin={{
        //                             top: 10,
        //                             right: 30,
        //                             left: 0,
        //                             bottom: 0,
        //                         }}
        //                     >
        //                         <CartesianGrid strokeDasharray="3 3" />
        //                         <XAxis dataKey="Create_at" />
        //                         <YAxis />
        //                         <Tooltip />
        //                         <Area
        //                             type="monotone"
        //                             dataKey="Score_neg"
        //                             stroke="#82ca9d"
        //                             fill="#82ca9d"
        //                         />

        //                         <Brush />
        //                     </AreaChart>
        //                 </ResponsiveContainer>
        //                 <ResponsiveContainer width="100%" height={350}>
        //                     <AreaChart
        //                         width={1000}
        //                         height={350}
        //                         data={data}
        //                         syncId="anyId"
        //                         margin={{
        //                             top: 10,
        //                             right: 30,
        //                             left: 0,
        //                             bottom: 0,
        //                         }}
        //                     >
        //                         <CartesianGrid strokeDasharray="3 3" />
        //                         <XAxis dataKey="Create_at" />
        //                         <YAxis />
        //                         <Tooltip />
        //                         <Area
        //                             type="monotone"
        //                             dataKey="Score_happy"
        //                             stroke="#8884d8"
        //                             fill="#8884d8"
        //                         />
        //                     </AreaChart>
        //                 </ResponsiveContainer>
        //             </>
        //         )}

        //         <div></div>
        //     </div>
        // );

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
                        {elements}

                        <Brush />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        // renderLineChart = <>is loading...</>;
        renderBarChart = <>is loading...</>;
    }
    function handleChange() {
        setClick(!isClick);
        countArticle();
    }

    return (
        <motion.li className="flex flex-col items-center">
            <div className="w-full mt-15">
                <div className="ml-10 flex">
                    <span className="mr-3">Time</span>
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
                    <span className="ml-1">Day</span>
                </div>
                <div>{checkBoxList}</div>
                {elements}
                {/* <div className="flex flex-row">{renderLineChart}</div> */}

                <div className="mt-20">{renderBarChart}</div>
            </div>
        </motion.li>
    );
};

export default ArticleGraph;
