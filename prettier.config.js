export default {
  overrides: [
    {
      files: "*.html",
      options: {
        singleQuote: false,
      },
    },
    {
      files: "*.css",
      options: {
        singleQuote: false,
      },
    },
    {
      files: "*.js",
      options: {
        singleQuote: true,
      },
    },
  ],
};
