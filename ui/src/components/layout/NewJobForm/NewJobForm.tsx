import React, { useState } from "react";
import { Button } from "../../atom/Button/Button";
import { CallNewJob } from "../../../grpc/job";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";

const NewJobForm: React.FC = () => {
    const [keyword, setKeyword] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [accessCode, setAccessCode] = useState<string>("");
    const [isOk, setIsOk] = useState<boolean>(false);
    const [isLogicRun, setIsLogicRun] = useState<boolean>(false);

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);

        ValidateFormData(e.target.value.length);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);

        ValidateFormData(e.target.value.length);
    };

    const handleAccessCodeChange = (e) => {
        setAccessCode(e.target.value);

        ValidateFormData(e.target.value.length);
    };

    const ValidateFormData = (value) => {
        if (value <= 0) {
            setIsOk(false);
        } else {
            setIsOk(true);
        }
    };

    return (
        <div className="flex flex-col w-3/4 h-3/4 items-center">
            {isLogicRun ? (
                <motion.div
                    key={"tailspin"}
                    className="flex flex-col fixed z-30 inset-0 bg-gray-700 flex items-center justify-center"
                >
                    <TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    <div className="mt-10 text-white text-2xl flex flex-row">
                        Trying to creating job
                        <div className="writer">
                            <div className="writer-text">...</div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <></>
            )}
            <div className="w-full h-full flex flex-col items-center  pb-10 pt-10  mt-10 mb-5 rounded-lg bg-white shadow-md">
                <div className="flex flex-col w-3/4 mb-5 ">
                    <span className="font-semibold">Keyword : </span>
                    <input
                        type="text"
                        name="Keyword"
                        value={keyword}
                        placeholder={"Keyword"}
                        onChange={handleKeywordChange}
                        required
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                </div>
                <div className="flex flex-col w-3/4 mb-5">
                    <span className="font-semibold">Author : </span>
                    <input
                        type="text"
                        name="Author"
                        value={author}
                        placeholder={"Author"}
                        required
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleAuthorChange}
                    ></input>
                </div>
                <div className="flex flex-col w-3/4">
                    <span className="font-semibold">AccessCode : </span>
                    <input
                        type="password"
                        name="AccessCode"
                        value={accessCode}
                        placeholder={"AccessCode"}
                        required
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleAccessCodeChange}
                    ></input>
                </div>
                <div className="flex flex-row w-full mt-20">
                    <div className="mr-10 w-3/4 ml-10 h-10">
                        <Button
                            size="full"
                            color="white"
                            isDisabled={!isOk}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLogicRun(true);

                                if (
                                    author.length <= 0 ||
                                    keyword.length <= 0 ||
                                    accessCode.length <= 0
                                ) {
                                    alert(
                                        "Please write more information at field",
                                    );
                                } else {
                                    CallNewJob(
                                        keyword,
                                        author,
                                        accessCode,
                                        (_, statusMessage: string) => {
                                            alert(statusMessage);
                                            if (statusMessage.length > 1) {
                                                console.log(statusMessage);
                                            }

                                            setIsLogicRun(false);
                                            location.replace("/");
                                        },
                                    );
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="w-3/4 mr-10">
                        <Button
                            size="full"
                            color="gray"
                            onClick={(e) => {
                                e.preventDefault();
                                location.replace("/");
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewJobForm;
