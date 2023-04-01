import React, { useRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen max-h-screen   bg-gray-100">
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
                <title></title>
            </Head>

            <Component {...pageProps} key={router.pathname} />
        </div>
    );
}

export default MyApp;
