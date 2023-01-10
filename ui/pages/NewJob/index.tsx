import React, { useState } from "react";
import { Button } from "../../src/components/atom/Button/Button";
import { useRouter } from "next/router";
import { CallNewJob } from "../../src/grpc/job";

export default function NewJob() {
    const router = useRouter();
    const [keyword, setKeyword] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [isOk, setIsOk] = useState<boolean>(false);

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
        ValidateFormData();
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
        ValidateFormData();
    };

    const ValidateFormData = () => {
        if (author.length > 0 && keyword.length > 0) {
            setIsOk(false);
        } else {
            setIsOk(true);
        }
    };

    return (
        <div className="flex flex-col w-3/4 h-3/4 items-center">
            <div className="w-full h-full flex flex-col items-center  pb-10 pt-10  mt-10 mb-5 rounded-lg bg-white shadow-md">
                <div className="flex flex-col w-96 mb-5 ">
                    <span className="font-semibold">Keyword : </span>
                    <input
                        type="text"
                        name="Keyword"
                        value={keyword}
                        placeholder={"Keyword"}
                        onChange={handleKeywordChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                </div>
                <div className="flex flex-col w-96">
                    <span className="font-semibold">Author : </span>
                    <input
                        type="text"
                        name="Author"
                        value={author}
                        placeholder={"Author"}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleAuthorChange}
                    ></input>
                </div>
                <div className="flex flex-row mt-20">
                    <div className="mr-10">
                        <Button
                            size="large"
                            color="white"
                            isDisabled={isOk}
                            onClick={(e) => {
                                e.preventDefault();
                                CallNewJob(keyword, author, (message) => {
                                    // alert("Received" + message);
                                    // router.push("/");
                                    location.replace("/");
                                });
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                    <div>
                        <Button
                            size="large"
                            color="gray"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
