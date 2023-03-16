import React, { useEffect, useState } from "react";
import { CallGetJobList } from "../../../grpc/job";
import { JobItem } from "../../atom/JobItem/JobItem";

type job = {
    id: string;
    status: string;
    keyword: string;
    owner: string;
    date: string;
};

const List: React.FC = () => {
    const [data, setData] = useState<job[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (!isLoaded) {
            fetchJobList();
        }
    }, [isLoaded]);

    async function fetchJobList() {
        try {
            CallGetJobList((message) => {
                const newJobList = [...data];
                message.jobList.map((value, _) => {
                    const newJob: job = {
                        id: value.id,
                        status: value.status,
                        keyword: value.keyword,
                        owner: value.owner,
                        date: value.date.slice(0, 10),
                    };
                    newJobList.push(newJob);
                });
                newJobList.sort((a, b) => {
                    return (
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                });

                setData(newJobList);
                setIsLoaded(true);
            });
        } catch (err) {
            console.log("Can't fetch data from server");
            throw err;
        }
    }

    let jobList;
    if (data == null || data == undefined || data.length == 0) {
        jobList = <div className="w-full flex justify-center mt-10"></div>;
    } else {
        jobList = data.map((job, index) => {
            return (
                <div key={"job" + index} className="w-full flex justify-center">
                    <JobItem
                        id={job.id.toString()}
                        date={job.date.toString()}
                        keyword={job.keyword.toString()}
                        owner={job.owner.toString()}
                        status={job.status.toString()}
                    ></JobItem>
                </div>
            );
        });
    }

    return (
        <>
            <>{jobList}</>
        </>
    );
};

export default List;
