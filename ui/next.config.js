// module.exports = {
//     typescript: {
//         // !! WARN !!
//         // Dangerously allow production builds to successfully complete even if
//         // your project has type errors.
//         // !! WARN !!
//         ignoreBuildErrors: true,
//     },
// };

const GRPCWEBADDR = process.env.ADDR;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/pb/:path*",
                destination: `https://` + `${GRPCWEBADDR}` + `/:path*`,
            },
        ];
    },
};
