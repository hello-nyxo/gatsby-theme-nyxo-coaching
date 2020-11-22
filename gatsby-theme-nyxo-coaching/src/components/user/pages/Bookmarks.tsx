import HabitCard from "@components/habit/HabitCard"
import { H3 } from "@components/html/Html"
import LessonCard from "@components/lesson/LessonCard"
import WeekCard from "@components/week/WeekCard"
import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../../../graphql-types"
import { useGetUserBookmarks } from "../../../hooks/useBookmarks"
import { H4 } from "../../html/Html"

export const Bookmarks: FC = () => {
  const {
    allContentfulWeek: { nodes: weekContent },
    allContentfulHabit: { nodes: habitContent },
    allContentfulLesson: { nodes: lessonContent },
  } = useStaticQuery(graphql`
    query {
      allContentfulHabit(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...HabitFragment
        }
      }

      allContentfulLesson(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...LessonFragment
        }
      }

      allContentfulWeek(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...WeekFragment
        }
      }
    }
  `)
  const {
    data: { lessons, weeks, habits },
  } = useGetUserBookmarks([...weekContent, ...habitContent, ...lessonContent])
  const { t } = useTranslation()

  return (
    <Container>
      <H3>{t("COACHING.BOOKMARKS")}</H3>
      {weeks?.length > 0 && (
        <>
          <H4>{t("COACHING.WEEKS")}</H4>
          <BookmarkContainer>
            {weeks.map((week: ContentfulWeek) => {
              return (
                <WeekCard
                  bookmarked
                  key={`${week?.id}-${week?.slug}`}
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
          </BookmarkContainer>
        </>
      )}
      {lessons?.length > 0 && (
        <>
          <H4>{t("COACHING.LESSONS")}</H4>
          <BookmarkContainer>
            {lessons.map((lesson: ContentfulLesson) => (
              <LessonCard
                slug={`${lesson?.slug}`}
                name={lesson?.lessonName}
                key={`${lesson?.id}-${lesson?.slug}`}
                bookmarked={false}
                loading={false}
                path={`/lesson/${lesson?.slug}`}
                lesson={lesson}
                readingTime={lesson?.fields?.readingTime}
                cover={lesson?.cover?.fluid as FluidObject}
                excerpt={lesson?.fields?.excerpt}
              />
            ))}
          </BookmarkContainer>
        </>
      )}
      {habits?.length > 0 && (
        <>
          <H4>{t("HABITS")}</H4>
          <BookmarkContainer>
            {habits.map((node: ContentfulHabit) => (
              <HabitCard
                link
                key={`${node.id}${node.slug}`}
                period={node.period}
                title={node.title}
                slug={`/habit/${node.slug}`}
                excerpt={node.description?.fields?.excerpt}
              />
            ))}
          </BookmarkContainer>
        </>
      )}
    </Container>
  )
}

const Container = styled.div``

const BookmarkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -1rem;
`
