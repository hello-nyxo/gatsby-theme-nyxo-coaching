const path = require("path");

process.env.GATSBY_SSR_DIRNAME = __dirname;

module.exports = {
  siteMetadata: {
    author: `Pietari Nurmi`,
    company: `Univalmentajat Oy`,
    title: `Univalmennus`,
    description: `Univalmentaja`,
    siteUrl: `https://pietari.nyxo.app`,
    social: {
      twitter: `pietnurm`,
      linkedIn: `pietnurm`,
    },
  },
  plugins: [
    {
      resolve: "@hello-nyxo/gatsby-theme-nyxo-coaching",
      options: {},
    },
    `gatsby-plugin-typescript`,
  ],
};
