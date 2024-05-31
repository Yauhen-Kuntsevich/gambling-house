module.exports = {
  overrides: [
    {
      files: '*.html',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.mjs',
      options: {
        singleQuote: true,
      },
    },
  ],
};
