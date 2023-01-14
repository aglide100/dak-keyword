import React, { useState } from "react";
import classNames from "classnames";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Button } from "../../atom/Button/Button";

export type HeaderProps = {
    isShow: boolean | undefined;
    scrollDirection: "up" | "down" | undefined;
    scrollY: number;
};

const variants: Variants = {
    open: (height = 1500) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 0px) 10px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at calc(100% - 0px) 0px)",
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40,
            duration: 0.7,
        },
    },
    invisible: {
        visibility: "hidden",
        // transition: {
        //     duration: 3,
        // },
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
                    "group w-full  h-20 flex flex-row items-center fixed left-0 top-0 transition duration-500 z-40 transform shadow",
                    {
                        // "translate-y-0": isIconClick,
                        "bg-white": scrollY < 100 && !isIconClick,
                        "bg-gray-300 bg-opacity-50 -translate-y-4 hover:translate-y-0 hover:bg-white hover:bg-opacity-100":
                            scrollY > 100 &&
                            scrollDirection == "up" &&
                            !isIconClick,
                        // "bg-white translate-y-0 box-border":
                        //     scrollY > 100 &&
                        //     scrollDirection == "down" &&
                        //     !isIconClick,
                    },
                )}
            >
                <div
                    className={classNames(
                        "w-full flex justify-between items-center mt-1 mb-3 transition duration-500 transform",
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
                    <div className="h-full flex flex-row justify-center">
                        <div className="w-full flex ml-2 mr-2 ">
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
                </div>
            </nav>

            <>
                <motion.div
                    initial={"false"}
                    animate={isIconClick ? "open" : "closed"}
                    exit={"invisible"}
                    className={classNames(
                        "fixed bg-black w-full transform h-110vh z-40",
                    )}
                    variants={variants}
                >
                    {isIconClick ? (
                        <motion.div className="w-screen h-screen flex justify-center itmes-center text-white">
                            <motion.div className=" flex flex-col mt-20">
                                <motion.div className="text-7xl mt-10 mb-20 transition delay-150 hover:underline">
                                    Hello
                                </motion.div>
                                <motion.div className="text-7xl transition delay-150 hover:underline">
                                    World
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        ""
                    )}
                </motion.div>
            </>

            <div className="fixed top-5  right-0 z-50">
                <a
                    className={classNames(
                        "cursor-pointer menu-trigger type12 sm:mr-6",
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
        </div>
    );
};

export default Header;
