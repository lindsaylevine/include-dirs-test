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
  env: {
    someVar: 'hello???'
  }
};
