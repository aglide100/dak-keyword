// module.exports = {
//     typescript: {
//         // !! WARN !!
//         // Dangerously allow production builds to successfully complete even if
//         // your project has type errors.
//         // !! WARN !!
//         ignoreBuildErrors: true,
//     },
// };

const NEXT_PUBLIC_GRPCWEBADDR = process.env.GRPCWEBADDR;

module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return {
            fallback: [
                {
                    source: "/:path*",
                    destination: NEXT_PUBLIC_GRPCWEBADDR + `//:path*`,
                },
            ],
        };
    },
};

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
