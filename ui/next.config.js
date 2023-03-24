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

module.exports = {
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
            secure: true,
            protocolRewrite: "https",
            onProxyReq: (proxyReq) => {
                proxyReq.setHeader("Connection", "keep-alive");
            },
        });

        return [apiProxy];
    },
};

// module.exports = {
//     reactStrictMode: false,
//     async rewrites() {
//         return [
//             {
//                 source: "/pb/:path*",
//                 destination: `https://` + `${GRPCWEBADDR}` + `/:path*`,
//             },
//         ];
//     },
//     async serverMiddleware() {
//         const proxy = createProxyMiddleware({
//             target: `https://` + `${GRPCWEBADDR}`,
//             changeOrigin: true,
//             secure: true,
//         });

//         return {
//             "/pb": proxy,
//         };
//     },
// };
