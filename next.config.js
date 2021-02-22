module.exports = {
  i18n: {
    localeDetection: false,
    locales: ['en', 'fr', 'it'],
    defaultLocale: 'en',
  },
  target: 'serverless',

  /*
   * This is a Netlify-specific config identifying a directory that is
   * referenced using `fs` or other methods that Webpack doesn't bundle.
   */
  functions: {
    'pages/[[...slug]].js': {
      includeDir: './_content',
    },
  },
};
