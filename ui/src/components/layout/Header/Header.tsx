import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Button } from "../../atom/Button/Button";

export type HeaderProps = {
    isShow: boolean | undefined;
    scrollDirection: "up" | "down" | undefined;
    scrollY: number;
};

const variants = {
    open: (height = 1500) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 0px) 10px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at calc(100% - 0px) 10px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Header: React.FC<HeaderProps> = ({
    isShow,
    scrollDirection,
    scrollY,
}) => {
    const [isIconClick, setIconClick] = useState<boolean>(false);
    const router = useRouter();

    return (
        <div>
            <nav
                className={classNames(
                    "group w-full fixed left-0 top-0 transition duration-500 z-40 transform shadow h-20 ",
                    {
                        "translate-y-0": isIconClick,
                        "bg-white": scrollY < 100 && !isIconClick,
                        "bg-gray-300 bg-opacity-50 -translate-y-4 hover:translate-y-0 hover:bg-white hover:bg-opacity-100":
                            scrollY > 100 &&
                            scrollDirection == "up" &&
                            !isIconClick,
                        "bg-white translate-y-0 box-border":
                            scrollY > 100 &&
                            scrollDirection == "down" &&
                            !isIconClick,
                    },
                )}
            >
                <div
                    className={classNames(
                        "w-full flex justify-between items-center mt-1 mb-3 transition duration-500 transform items-center",
                        {
                            "text-black translate-y-0 box-border":
                                isIconClick ||
                                (scrollY < 100 && scrollDirection == "down"),
                            "text-gray-300 group-hover:text-black hover:translate-y-0":
                                scrollY > 100 &&
                                scrollDirection == "up" &&
                                !isIconClick,
                        },
                    )}
                >
                    <div className=" h-full flex flex-row justify-center">
                        <div className="w-full flex ml-2 mr-2">
                            <Button
                                size="medium"
                                isDisabled={!isShow}
                                onClick={(e) => {
                                    e.preventDefault();

                                    router.push("/NewJob");
                                }}
                            >
                                New Job
                            </Button>
                        </div>
                        <div
                            className="flex flex-col mt-1.5 text-center"
                            onClick={(e) => {
                                e.preventDefault();

                                router.replace({
                                    pathname: "/",
                                });
                            }}
                        >
                            Home
                        </div>
                    </div>
                    <div
                        className={classNames("cursor-pointer w-52", {
                            "bg-opacity-50":
                                scrollY > 100 &&
                                scrollDirection == "up" &&
                                !isIconClick,
                        })}
                    ></div>
                    <a
                        className={classNames(
                            "cursor-pointer menu-trigger type12 transform translate-y-4 mr-2 sm:mr-6 z-50",
                            {
                                "active-12": isIconClick,
                                "": !isIconClick,
                            },
                        )}
                        // href="#"
                        onClick={() => {
                            setIconClick(!isIconClick);
                        }}
                    >
                        <span
                            className={classNames("bg-black select-none", {
                                "bg-white": isIconClick,
                            })}
                        ></span>
                        <span
                            className={classNames("bg-black select-none", {
                                "bg-white": isIconClick,
                            })}
                        ></span>
                        <span
                            className={classNames("bg-black select-none", {
                                "bg-white": isIconClick,
                            })}
                        ></span>
                    </a>
                </div>
            </nav>
            <motion.nav
                initial={false}
                animate={isIconClick ? "open" : "closed"}
            >
                <motion.div
                    className={classNames(
                        "fixed bg-black w-full h-screen -translate-y-10 transition z-30 transform h-110vh",
                        {
                            "right-0 h-110vh": isIconClick,
                            "bg-opacity-50 -translate-y-10 hover:translate-y-0 hover:bg-opacity-100 h-110vh":
                                scrollY > 100 &&
                                scrollDirection == "up" &&
                                !isIconClick,
                            "-translate-y-10 box-border h-110vh":
                                scrollY > 100 &&
                                scrollDirection == "down" &&
                                !isIconClick,
                        },
                    )}
                    variants={variants}
                >
                    {isIconClick && (
                        <div className="mt-20 text-white">
                            <div className="ml-32 flex flex-col">
                                <div>
                                    <span className="text-7xl mt-36 mb-28 transition delay-150 hover:underline">
                                        Hello
                                    </span>
                                </div>
                                <div>
                                    <span className="text-7xl transition delay-150 hover:underline">
                                        World
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.nav>
        </div>
    );
};

export default Header;
