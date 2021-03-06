import React, { useEffect, useState } from "react";
import { makeGetJobList } from "../../../grpc/job";
import { JobItem } from "../../atom/JobItem/Job";

type job = {
    id: string;
    status: string;
    keyword: string;
    owner: string;
    date: string;
};

const List: React.FC<{}> = ({}) => {
    const [data, setData] = useState<job[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(() => {
        if (!isLoaded) {
            fetchJobList();
        }
    }, []);

    async function fetchJobList() {
        makeGetJobList((message) => {
            message.jobList.map((value, _) => {
                console.log(value);
                const newJobList = data;
                const newJob: job = {
                    id: value.id,
                    status: value.status,
                    keyword: value.keyword,
                    owner: value.owner,
                    date: value.date,
                };
                newJobList.push(newJob);

                setData(newJobList);
            });

            setIsLoaded(true);
        });
    }

    let jobList;
    if (data == null || data == undefined || data.length == 0) {
        jobList = (
            <div className="w-full flex justify-center mt-10">
                Can't find jobs!
            </div>
        );
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

    return <>{jobList}</>;
};

export default List;
