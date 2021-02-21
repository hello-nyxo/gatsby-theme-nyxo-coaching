require("source-map-support").install()
require("ts-node").register()
const {
  documentToPlainTextString,
} = require("@contentful/rich-text-plain-text-renderer")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = (options) => {
  return {
    siteMetadata: {
      author: `Perttu Lähteenlahti`,
      company: `Nyxo`,
      title: `Nyxo`,
      description: `Nyxo univalmennukset`,
      siteUrl: `https://perttu.nyxo.app`,
      social: {
        twitter: `plahteenlahti`,
        linkedIn: `plahteenlahti`,
      },
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-typescript`,
      `@m5r/gatsby-transformer-blurhash`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-fontawesome-css`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/locales`,
          name: `locales`,
        },
      },
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
        resolve: `gatsby-plugin-lunr`,
        options: {
          languages: [
            {
              name: "en",
              filterNodes: (node) => node.node_locale === "en-US",
            },
            {
              name: "fi",
              filterNodes: (node) => node.node_locale === "fi-FI",
            },
          ],
          fields: [
            { name: "title", store: true, attributes: { boost: 20 } },
            { name: "content" },
            { name: "type", store: true },
            { name: "slug", store: true },
          ],
          resolvers: {
            ContentfulLesson: {
              type: (_) => `lesson`,
              title: (node) => node.lessonName,
              slug: (node) => node.slug,
              content: (node) =>
                documentToPlainTextString(JSON.parse(node.lessonContent.raw)),
            },
          },
          filename: "search_index.json",
          fetchOptions: {
            credentials: "same-origin",
          },
        },
      },
      // {
      //   resolve: `gatsby-plugin-graphql-codegen`,
      //   options: {
      //     documentPaths: [
      //       "./src/**/*.{ts,tsx}",
      //       "./node_modules/gatsby-*/**/*.js",
      //     ],
      //     fileName: `${__dirname}/gatsby-graphql.ts`,
      //   },
      // },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-111729679-1",
          head: false,
          anonymize: true,
          respectDNT: true,
          defer: true,
        },
      },
      {
        resolve: `gatsby-source-google-analytics-reporting-api`,
        options: {
          email: process.env.CLIENT_EMAIL,
          key: Buffer.from(process.env.PRIVATE_KEY, "base64")
            .toString()
            .replace(/\\n/g, "\n"),
          viewId: process.env.VIEW_ID,
          startDate: `2009-01-01`,
        },
      },
      {
        resolve: `gatsby-plugin-react-i18next`,
        options: {
          languages: [`en`, `fi`],
          defaultLanguage: `en`,
          localeJsonSourceName: `locales`,
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
            { matchPath: "/:lang?/me", getLanguageFromPath: true },
            {
              matchPath: "/:lang?/author/:uid",
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
}
