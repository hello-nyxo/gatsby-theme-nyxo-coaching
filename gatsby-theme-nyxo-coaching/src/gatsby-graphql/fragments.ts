import { graphql } from "gatsby"

export const localeFragment = graphql`
  fragment LocaleFragment on Locale {
    ns
    data
    language
  }
`

export const lessonFragment = graphql`
  fragment LessonFragment on ContentfulLesson {
    lessonName
    slug
    updatedAt(formatString: "")
    createdAt(formatString: "")
    habit {
      ...HabitFragment
    }
    authorCard {
      credentials
      name
      slug
      avatar {
        fluid(maxWidth: 150) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    cover {
      resize(width: 900, height: 471, cropFocus: CENTER) {
        src
      }
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 800, quality: 75) {
        src
      }
    }
    keywords
    fields {
      excerpt
      readingTime
    }
    weights {
      jetlag
      duration
      efficiency
      consistency
    }
    lessonContent {
      raw
      references {
        ... on ContentfulAsset {
          description
          __typename
          title
          contentful_id
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    additionalInformation {
      raw
    }
    week {
      weekName
      slug
    }
  }
`

export const weekFragment = graphql`
  fragment WeekFragment on ContentfulWeek {
    slug
    updatedAt(formatString: "")
    createdAt(formatString: "")
    taskCount
    weekName
    intro
    weekDescription {
      raw
    }
    coverPhoto {
      description
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 800, quality: 75) {
        src
      }
    }
    lessons {
      cover {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      id
      lessonName
      slug
      section {
        id
        title
        order
        description {
          raw
        }
      }
      habit {
        ...HabitFragment
      }
      fields {
        excerpt
        readingTime
      }
      lessonContent {
        raw
      }
      authorCard {
        ...AuthorFragment
      }
    }
  }
`

export const habitFragment = graphql`
  fragment HabitFragment on ContentfulHabit {
    slug
    period
    title
    fields {
      excerpt
    }
    description {
      raw
      references {
        ... on ContentfulHabit {
          __typename
          title
          contentful_id
          period
          slug
          fields {
            excerpt
          }
        }
      }
    }
    updatedAt(formatString: "")
    createdAt(formatString: "")
    lesson {
      lessonName
      slug
      keywords
      habit {
        title
        slug
        period
        fields {
          excerpt
        }
        description {
          raw
        }
      }
      week {
        slug
        weekName
      }
    }
  }
`

export const authorFragment = graphql`
  fragment AuthorFragment on ContentfulAuthor {
    id
    name
    slug
    avatar {
      fluid(maxWidth: 300) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(width: 10) {
        src
      }
    }
    fields {
      excerpt
    }
    credentials
    lesson {
      id
    }
  }
`
