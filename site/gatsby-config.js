const path = require("path");

process.env.GATSBY_SSR_DIRNAME = __dirname;

module.exports = {
  plugins: [
    {
      resolve: "@hello-nyxo/gatsby-theme-nyxo-coaching",
      options: {},
    },
    `gatsby-plugin-typescript`,
  ],
};
