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
        resolve: "gatsby-plugin-i18n",
        options: {
          langKeyDefault: "en",
          useLangKeyLayout: false,
        },
      },
      {
        resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
        options: {
          fields: ["title", "slug", "type", "content"],
          resolvers: {
            ContentfulLesson: {
              type: (_) => `lesson`,
              title: (node) => node.lessonName,
              slug: (node) => node.slug,
              content: (node) =>
                documentToPlainTextString(JSON.parse(node.lessonContent.raw)),
            },
          },
        },
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

      {
        resolve: `gatsby-plugin-react-i18next`,
        options: {
          path: `${__dirname}/src/locales`,
          languages: [`en`, `fi`],
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
