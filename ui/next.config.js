// module.exports = {
//     typescript: {
//         // !! WARN !!
//         // Dangerously allow production builds to successfully complete even if
//         // your project has type errors.
//         // !! WARN !!
//         ignoreBuildErrors: true,
//     },
// };
const { createProxyMiddleware } = require("http-proxy-middleware");

const GRPCWEBADDR = process.env.ADDR;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports = {
    // async headers() {
    //     return [
    //         {
    //             // 해당 origin에서 오는 요청 모두 허용
    //             source: "/:path*",
    //             headers: [
    //                 {
    //                     key: "Access-Control-Allow-Origin",
    //                     value: "*",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Methods",
    //                     value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Headers",
    //                     value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    //                 },
    //             ],
    //         },
    //     ];
    // },
    async rewrites() {
        return [
            {
                source: "/pb/:path*",
                destination: `https://` + `${GRPCWEBADDR}` + `/:path*`,
            },
        ];
    },
    async serverMiddleware() {
        const apiProxy = createProxyMiddleware("/pb", {
            target: `https://` + GRPCWEBADDR,
            changeOrigin: true,
            secure: false,
            protocolRewrite: "https",
            onProxyReq: (proxyReq, req, res) => {
                proxyReq.setHeader("Connection", "keep-alive");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader(
                    "Access-Control-Allow-Methods",
                    "GET, POST, OPTIONS",
                );
                res.setHeader(
                    "Access-Control-Allow-Headers",
                    "Content-Type, Authorization",
                );
            },
        });

        return [apiProxy];
    },
};
