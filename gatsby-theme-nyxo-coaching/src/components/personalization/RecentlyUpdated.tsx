import { H5 } from "@components/html/Html"
import { LessonItem } from "@components/lesson/LessonItem"
import { ContentfulLesson } from "graphql-types"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  lessons: ContentfulLesson[]
}

export const RecentyUpdated: FC<Props> = ({ lessons }) => {
  return (
    <Container>
      <H5>Recently updated</H5>
      <Lessons>
        {lessons.map((lesson) => (
          <LessonItem
            updatedAt={lesson.updatedAt}
            weekSlug={lesson?.week?.[0].slug}
            weekName={lesson?.week?.[0].weekName}
            author={lesson?.authorCard[0]}
            key={lesson.slug}
            title={lesson.lessonName}
            readingTime={lesson?.lessonContent?.fields?.readingTime}
            cover={lesson.cover}
          />
        ))}
      </Lessons>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
`

const Lessons = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`
