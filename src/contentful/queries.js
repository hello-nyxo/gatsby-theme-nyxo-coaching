"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentfulTagsQuery = exports.authorsQuery = exports.questionnairesQuery = exports.weeksQuery = exports.habitsQuery = exports.lessonsQuery = exports.contentfulData = void 0;
exports.contentfulData = `
  {
    allContentfulLesson: allContentfulLesson {
      nodes {
        slug
        node_locale
      }
    }

    allContentfulHabit: allContentfulHabit {
      nodes {
        slug
        node_locale
      }
    }

    allContentfulWeek: allContentfulWeek(
      filter: { internal: { type: { eq: "ContentfulWeek" } } }
    ) {
      nodes {
        slug
        node_locale
      }
    }

    allContentfulAuthor: allContentfulAuthor {
      nodes {
        slug
        node_locale
      }
    }

    contentfulTagsQuery: allContentfulLesson {
      group(field: keywords) {
        fieldValue
        totalCount
      }
    }

    allContentfulQuestionnaire: allContentfulQuestionnaire(
      sort: { fields: questions___id }
    ) {
      nodes {
        slug
        node_locale
      }
    }
  }
`;
exports.lessonsQuery = `
  {
    allContentfulLesson: allContentfulLesson {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`;
exports.habitsQuery = `
  {
    allContentfulHabit: allContentfulHabit {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`;
exports.weeksQuery = `
  {
    allContentfulWeek: allContentfulWeek(
      filter: { internal: { type: { eq: "ContentfulWeek" } } }
    ) {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`;
exports.questionnairesQuery = `
  {
    allContentfulQuestionnaire: allContentfulQuestionnaire(
      sort: { fields: questions___id }
    ) {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`;
exports.authorsQuery = `
  {
    allContentfulAuthor: allContentfulAuthor {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`;
exports.contentfulTagsQuery = `
  {
    contentfulTagsQuery: allContentfulLesson(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      group(field: keywords) {
        fieldValue
        totalCount
      }
    }
  }
`;
