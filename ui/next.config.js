// const withTypescript = require("@zeit/next-typescript");
// module.exports = withTypescript();
// module.exports = {
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// };
const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const withVideos = require("next-videos");

module.exports = withPlugins([
  [withVideos],
  {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    images: {
      domains: ["img.youtube.com", "assets.example.com"],
    },
  },
]);
