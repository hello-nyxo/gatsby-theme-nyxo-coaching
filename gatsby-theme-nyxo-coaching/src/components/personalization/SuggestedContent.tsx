import HabitListItem from "@components/habit/HabitListItem"
import { H5 } from "@components/html/Html"
import { LessonItem } from "@components/lesson/LessonItem"
import { device } from "@components/Primitives"
import Image, { GatsbyImageProps } from "gatsby-image"
import { Link } from "gatsby-plugin-react-i18next"
import { ContentfulHabit, ContentfulLesson } from "graphql-types"
import { isNumber, shuffle } from "lodash"
import React, { FC } from "react"
import styled, { css } from "styled-components"

type Props = {
  lessons: ContentfulLesson[]
  habits: ContentfulHabit[]
}

const getSelectedContent = ({ habits, lessons }) => {
  const shuffledLessons = shuffle(lessons)
  const highlightedLesson = shuffledLessons[0]
  const selectedLessons = shuffledLessons.slice(1, 5)

  const selectedHabits = shuffle(habits).slice(0, 3)

  return {
    highlightedLesson: highlightedLesson,
    selectedHabits: selectedHabits,
    selectedLessons: selectedLessons,
  }
}

export const SuggestedContent: FC<Props> = ({ lessons, habits }) => {
  const {
    selectedLessons,
    selectedHabits,
    highlightedLesson,
  } = getSelectedContent({ lessons, habits })

  return (
    <Container>
      <Column>
        <TopPick>
          <Cover fluid={highlightedLesson?.cover?.fluid} />
          <Row>
            <AuthorPhoto
              fluid={highlightedLesson?.authorCard[0].avatar?.fluid}
            />
            <LessonFrom>
              <Author to={`/author/${highlightedLesson?.authorCard[0].slug}`}>
                {highlightedLesson?.authorCard[0].name}
              </Author>
              {` in `}
              <Week to={`/week/${highlightedLesson?.week[0].slug}`}>
                {highlightedLesson?.week[0].weekName}
              </Week>
            </LessonFrom>
          </Row>
          <Title>{highlightedLesson?.lessonName}</Title>
          <Text>{highlightedLesson?.lessonContent?.fields.excerpt}...</Text>

          <ReadingTime>{`${highlightedLesson?.lessonContent?.fields?.readingTime} min read`}</ReadingTime>
          <ReadMore />
        </TopPick>
      </Column>
      <Column>
        <TopPicks>
          {selectedLessons.map((lesson) => (
            <LessonItem
              updatedAt={lesson.updatedAt}
              weekSlug={lesson.week[0].slug}
              weekName={lesson.week[0].weekName}
              author={lesson.authorCard[0]}
              key={lesson.slug}
              title={lesson.lessonName}
              readingTime={lesson.lessonContent.fields.readingTime}
              cover={lesson.cover}
            />
          ))}
        </TopPicks>
      </Column>

      <Column hide={device.laptop}>
        <ReadingList>
          {selectedHabits.map((habit) => (
            <HabitListItem
              link
              key={`${habit?.slug}`}
              title={habit?.title}
              period={habit?.period}
              slug={`/habit/${habit?.slug}`}
              excerpt={habit?.description?.fields?.excerpt}
            />
          ))}
        </ReadingList>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  margin: 4rem -1rem 5rem;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

type ColumnProps = {
  hide?: string
}

const Column = styled.div<ColumnProps>`
  ${({ hide }) =>
    hide
      ? css`
          @media ${hide} {
            display: none;
          }
        `
      : css``};

  flex: 1;
  box-sizing: border-box;
  padding: 0rem 1rem;
`

const TopPick = styled.div``

const Cover = styled(Image)<GatsbyImageProps>`
  background-color: black;
  height: 20rem;
  width: 100%;
  min-width: 20rem;
  margin-bottom: 1rem;
`

const TopPicks = styled.div``

const Title = styled(H5)`
  margin: 0.5rem 0rem 0.5rem;
`

const Text = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.4rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`

const ReadingTime = styled.span`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  font-size: 0.9rem;
`

const LessonFrom = styled.div`
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`

const AuthorPhoto = styled(Image)<GatsbyImageProps>`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  background-color: black;
`

const Author = styled(Link)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const Week = styled(Link)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const ReadingList = styled.div`
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
`

const ReadMore = styled(Link)``
