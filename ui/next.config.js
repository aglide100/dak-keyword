// module.exports = {
//     typescript: {
//         // !! WARN !!
//         // Dangerously allow production builds to successfully complete even if
//         // your project has type errors.
//         // !! WARN !!
//         ignoreBuildErrors: true,
//     },
// };

const GRPCWEBADDR = process.env.GRPCWEBADDR;

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `${GRPCWEBADDR}//:path*`,
            },
        ];
    },
    env: {
        GRPCWEBADDR: process.env.GRPCWEBADDR,
    },
};

module.exports = nextConfig;
// };
// const withPlugins = require("next-compose-plugins");
// // const optimizedImages = require("next-optimized-images");
// const withVideos = require("next-videos");

// module.exports = withPlugins([
//     [withVideos],
//     {
//         typescript: {
//             // !! WARN !!
//             // Dangerously allow production builds to successfully complete even if
//             // your project has type errors.
//             // !! WARN !!
//             ignoreBuildErrors: true,
//         },
//         // images: {
//         //     domains: ["img.youtube.com", "assets.example.com"],
//         // },
//     },
// ]);
