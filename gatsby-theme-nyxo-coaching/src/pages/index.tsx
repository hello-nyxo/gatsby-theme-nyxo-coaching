import PrivateRoute from "@components/auth/PrivateRoute"
import { H2 } from "@components/html/Html"
import Layout from "@components/Layout/Layout"
import { RecentlyUpdated } from "@components/personalization/RecentlyUpdated"
import { SuggestedContent } from "@components/personalization/SuggestedContent"
import { Container, P } from "@components/Primitives"
import { GlobalSearch } from "@components/search/Search"
import SEO from "@components/SEO/SEO"
import Details from "@components/user/pages/Details"
import Login from "@components/user/pages/Login"
import WeekCard from "@components/week/WeekCard"
import useSiteMetadata from "@hooks/useSiteMetaData"
import { Router } from "@reach/router"
import { graphql, PageProps } from "gatsby"
import { FluidObject } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulWeek } from "@typings/gatsby-graphql"

type Props = {
  weeksFI: {
    nodes: ContentfulWeek[]
  }
  weeksEN: {
    nodes: ContentfulWeek[]
  }
  coachingMeta: {
    childImageSharp: {
      fixed: {
        src: string
      }
    }
  }
  coachingCover: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const CoachingPage: FC<PageProps<Props, { language: string }>> = (props) => {
  const {
    data: {
      weeks: { nodes: weeks },
      allContentfulLesson: { nodes: lessons },
      habits: { nodes: habits },
      recentlyUpdated: { nodes: recentlyUpdated },
    },
    location: { pathname },
  } = props

  const { t } = useTranslation()

  const { title } = useSiteMetadata()
  return (
    <Layout>
      <Router>
        <PrivateRoute path={`fi/me`} component={Details} />
        <Login path={`fi/me/login`} />
      </Router>
      <SEO
        title={title}
        description={t("COACHING.DESCRIPTION")}
        pathName={pathname}
        // image={coachingMeta?.childImageSharp?.fixed?.src}
        staticImage={true}
      />

      <Container>
        <SuggestedContent lessons={lessons} habits={habits} />

        <GlobalSearch />
        {/* <CoachingPath weeks={weeks} /> */}
        <H2>{t("COACHING.WEEKS")}</H2>
        <P>{t("COACHING.WEEKS_TEXT")}</P>

        <Weeks>
          {weeks.map((week: ContentfulWeek) => {
            return (
              <WeekCard
                key={`${week?.slug}`}
                bookmarked={false}
                path={`/week/${week?.slug}`}
                intro={week?.intro}
                name={week?.weekName}
                duration={week?.duration}
                lessons={week?.lessons}
                coverPhoto={week?.coverPhoto?.fluid as FluidObject}
                slug={week.slug}
              />
            )
          })}
        </Weeks>

        <RecentlyUpdated lessons={recentlyUpdated} />
      </Container>
    </Layout>
  )
}

export default CoachingPage

export const Weeks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem -1rem;
`

export const pageQueryCoaching = graphql`
  query CoachingPageQuery($language: String) {
    # coachingMeta: file(name: { regex: "/Coaching/" }) {
    #   childImageSharp {
    #     fixed(width: 800, quality: 75) {
    #       ...GatsbyImageSharpFixed_noBase64
    #     }
    #   }
    # }

    # coachingCover: file(name: { regex: "/coaching-cover/" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 800, quality: 75) {
    #       ...GatsbyImageSharpFluid_withWebp_noBase64
    #     }
    #   }
    # }

    site {
      siteMetadata {
        title
      }
    }

    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ...LocaleFragment
        }
      }
    }

    weeks: allContentfulWeek(
      filter: {
        fields: { language: { eq: $language } }
        slug: { ne: "introduction" }
      }

      sort: { fields: order }
    ) {
      nodes {
        ...WeekFragment
      }
    }

    habits: allContentfulHabit(
      filter: { fields: { language: { eq: $language } } }
    ) {
      nodes {
        ...HabitFragment
      }
    }

    recentlyUpdated: allContentfulLesson(
      filter: { fields: { language: { eq: $language } } }
      sort: { fields: updatedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        ...LessonFragment
      }
    }

    allContentfulLesson(filter: { fields: { language: { eq: $language } } }) {
      nodes {
        ...LessonFragment
      }
    }
  }
`
