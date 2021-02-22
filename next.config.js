const path = require("path")

// if (!process.env.ROOT) process.env.ROOT = __dirname;
// if (!process.env.DATA_PATH)
//   process.env.DATA_PATH = path.join(__dirname, "_content");

// process.env.TEST_ENV_VAR = 'hello???'

// next.config.js
module.exports = {
  i18n: {
    localeDetection: false,
    locales: ["en", "fr", "it"],
    defaultLocale: "en",
  },
  target: "serverless",
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.md/,
  //     use: 'raw-loader'
  //   })
  //   return config
  // },
  functions: {
    "pages/[[...slug]].js": {
      includeDir: "./_content"
    }
  }
};
