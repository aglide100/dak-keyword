import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Logo from "../../atom/Icon/Logo";

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
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 0px) 10px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Header: React.FC<HeaderProps> = ({
  isShow,
  scrollDirection,
  scrollY
}) => {
  const [isIconClick, setIconClick] = useState<boolean>(false);

  return (
    <div>
      <nav
        className={classNames(
          "group w-screen fixed left-0 top-0 transition duration-500 z-40 transform shadow h-20 ",
          {
            "translate-y-0": isIconClick,
            "bg-white": scrollY < 100 && !isIconClick,
            "bg-gray-300 bg-opacity-50 -translate-y-4 hover:translate-y-0 hover:bg-white hover:bg-opacity-100":
              scrollY > 100 && scrollDirection == "up" && !isIconClick,
            "bg-white translate-y-0 box-border":
              scrollY > 100 && scrollDirection == "down" && !isIconClick
          }
        )}
      >
        <div
          className={classNames(
            "w-full flex justify-between items-center mt-1 mb-3 transition duration-500 transform items-center",
            {
              "text-black translate-y-0 box-border":
                isIconClick || (scrollY < 100 && scrollDirection == "down"),
              "text-gray-300 group-hover:text-black hover:translate-y-0":
                scrollY > 100 && scrollDirection == "up" && !isIconClick
            }
          )}
        >
          <div
            className={classNames("cursor-pointer w-52", {
              "bg-opacity-50":
                scrollY > 100 && scrollDirection == "up" && !isIconClick
            })}
          >
            {/* <Logo /> */}
          </div>

          <a
            className={classNames(
              "cursor-pointer menu-trigger type12 transform translate-y-4 mr-2 sm:mr-6 z-50",
              {
                "active-12": isIconClick,
                "": !isIconClick
              }
            )}
            // href="#"
            onClick={() => {
              setIconClick(!isIconClick);
            }}
          >
            <span
              className={classNames("bg-black select-none", {
                "bg-white": isIconClick
              })}
            ></span>
            <span
              className={classNames("bg-black select-none", {
                "bg-white": isIconClick
              })}
            ></span>
            <span
              className={classNames("bg-black select-none", {
                "bg-white": isIconClick
              })}
            ></span>
          </a>
        </div>
      </nav>
      <motion.nav initial={false} animate={isIconClick ? "open" : "closed"}>
        <motion.div
          className={classNames(
            "fixed bg-black w-screen h-screen -translate-y-10 transition z-30 transform",
            {
              "translate-y-0 right-0 ": isIconClick,
              "bg-opacity-50 -translate-y-10 hover:translate-y-0 hover:bg-opacity-100 h-110vh":
                scrollY > 100 && scrollDirection == "up" && !isIconClick,
              "-translate-y-10 box-border h-110vh ":
                scrollY > 100 && scrollDirection == "down" && !isIconClick
            }
          )}
          variants={variants}
        >
          {isIconClick && (
            <div className="mt-20 text-white">
              <div className="ml-32 flex flex-col">
                <Fade duration={1000} delay={1000} bottom>
                  <span className="text-7xl mt-36 mb-28 transition delay-150 hover:underline">
                    Hello
                  </span>
                </Fade>
                <Fade duration={1000} delay={1300} bottom>
                  <span className="text-7xl transition delay-150 hover:underline">
                    World
                  </span>
                </Fade>
              </div>
            </div>
          )}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Header;
