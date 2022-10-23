import React from "react";
import { motion } from "framer-motion";
import { Icon, IconType } from "../Icon/Icon";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";
import { ArticleProps } from "../ArticleItem/ArticleItem";

const data: ArticleProps[] = [
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "0",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "1",
        Score_none: "0",
        Score_max_value: "1",
        Score_max_name: "comp",
        Create_at: "2022-10-23T02:11:48.000Z",
        Job_id: "",
        Worker_id: "",
    },
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "0",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "1",
        Score_none: "0",
        Score_max_value: "1",
        Score_max_name: "comp",
        Create_at: "2022-10-23T01:58:48.000Z",
        Job_id: "",
        Worker_id: "",
    },
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "0",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "1",
        Score_none: "0",
        Score_max_value: "1",
        Score_max_name: "comp",
        Create_at: "2022-10-23T01:44:11.000Z",
        Job_id: "",
        Worker_id: "",
    },
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "0",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "1",
        Score_none: "0",
        Score_max_value: "1",
        Score_max_name: "comp",
        Create_at: "2022-10-23T01:43:02.000Z",
        Job_id: "",
        Worker_id: "",
    },
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "1",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "0",
        Score_none: "0",
        Score_max_value: "1",
        Score_max_name: "pos",
        Create_at: "2022-10-23T01:25:11.000Z",
        Job_id: "",
        Worker_id: "",
    },
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "0",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "1",
        Score_none: "0",
        Score_max_value: "0.99",
        Score_max_name: "comp",
        Create_at: "2022-10-22T23:32:09.000Z",
        Job_id: "",
        Worker_id: "",
    },
    {
        Id: "1",
        Author: "test",
        Keyword: "test",
        Content: "test",
        Platform: "tweet",
        Score_pos: "0",
        Score_neg: "0",
        Score_neut: "0",
        Score_comp: "1",
        Score_none: "0",
        Score_max_value: "0.75",
        Score_max_name: "comp",
        Create_at: "2022-10-T23:35:40.000Z",
        Job_id: "",
        Worker_id: "",
    },
];
type ArticleGraphProps = {
    JobId: any;
};

export const ArticleGraph = (props: ArticleGraphProps) => {
    // const renderLineChart = (
    //     <LineChart
    //         width={600}
    //         height={300}
    //         data={data}
    //         margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    //     >
    //         <Line type="monotone" dataKey="Score_max_name" stroke="#8884d8" />
    //         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    //         <XAxis dataKey="name" tick={renderCustomAxisTick} />
    //         <YAxis />
    //         <Tooltip />
    //     </LineChart>
    // );
    const renderLineChart = (
        <LineChart
            width={1000}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
            <Line type="monotone" dataKey="Score_pos" stroke="#8884d8" />

            <Line type="monotone" dataKey="Score_neg" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="Create_at" />
            <YAxis />
            <Legend />
            <Tooltip />
        </LineChart>
    );

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
            {renderLineChart}
        </motion.li>
    );
};

export default ArticleGraph;
