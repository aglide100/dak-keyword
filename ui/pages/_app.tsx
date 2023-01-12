import React, { useRef } from "react";
import Header from "../src/components/layout/Header/Header";
import type { AppProps } from "next/app";
import "../src/_css/common.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetScroll, UseScrollHooksProps } from "../src/Hooks";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "../src/components/atom/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const headerNode = useRef<HTMLDivElement>(null);

    const useScrollHooksProps: UseScrollHooksProps = {
        receivedRef: headerNode,
    };

    const result = useGetScroll(useScrollHooksProps);

    return (
        <>
            <Head>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="hello!" />
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
                />
                <title>Hello!</title>
            </Head>

            <div className="flex flex-col min-h-screen bg-gray-100">
                <div ref={headerNode}>
                    <Header {...result}></Header>
                </div>
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <motion.div
                        key={router.pathname}
                        className="w-full flex justify-center mt-20 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Component {...pageProps} key={router.pathname} />
                    </motion.div>
                </AnimatePresence>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default MyApp;
