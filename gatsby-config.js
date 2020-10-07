require("source-map-support").install()
require("ts-node").register()

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    author: `Pietari Nurmi`,
    title: `Univalmentajat Oy`,
    description: `Univalmentaja`,
    siteUrl: `https://pietari.nyxo.app`,
    social: {
      twitter: `pietnurm`,
      linkedIn: `pietnurm`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "700"],
              fontDisplay: "swap",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/me/*`, `/fi/me/*`] },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `fi`, `es`, `de`, `sv`, `fr`],
        defaultLanguage: `en`,
        redirect: false,
        siteUrl: "https://nyxo.app",
        i18nextOptions: {
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false,
          },
          keySeparator: ".",
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/week/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["fi"],
          },
          {
            matchPath: "/:lang?/lesson/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["fi"],
          },
          {
            matchPath: "/:lang?/author/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["fi"],
          },
          {
            matchPath: "/:lang?/habit/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["fi"],
          },
          {
            matchPath: "/:lang?/questionnaire/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["fi"],
          },
        ],
      },
    },
  ],
}
