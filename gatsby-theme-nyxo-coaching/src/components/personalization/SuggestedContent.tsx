import { H5 } from "@components/html/Html"
import { LessonItem } from "@components/lesson/LessonItem"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import Image, { GatsbyImageProps } from "gatsby-image"

export const SuggestedContent: FC = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulLesson(
        sort: { fields: updatedAt }
        limit: 6
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          lessonName
          slug
          lessonContent {
            fields {
              readingTime {
                minutes
              }
            }
          }
          authorCard {
            slug
            name
            avatar {
              fluid(maxWidth: 50) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
          cover {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          week {
            slug
            weekName
          }
        }
      }
    }
  `)

  const highlightLesson = data.allContentfulLesson.nodes[0]
  const lessons = data.allContentfulLesson.nodes.slice(1, -1)
  return (
    <Container>
      <Column>
        <TopPick>
          <Cover fluid={highlightLesson.cover.fluid} />
          <Row>
            <AuthorPhoto fluid={highlightLesson.authorCard[0].avatar.fluid} />
            <LessonFrom>
              <Author to={highlightLesson.authorCard[0].slug}>
                {highlightLesson.authorCard[0].name}
              </Author>
              {` in `}
              <Week to={`week/${highlightLesson.week[0].slug}`}>
                {highlightLesson.week[0].weekName}
              </Week>
            </LessonFrom>
          </Row>
          <Title>{highlightLesson.lessonName}</Title>
          <Text>
            Using React Native to build our core app has taught us a lot. In
            this post, we explore the highs and the lows of our experience.
          </Text>

          <ReadingTime>{`${Math.ceil(
            highlightLesson.lessonContent.fields.readingTime.minutes
          )} min read`}</ReadingTime>
        </TopPick>
      </Column>
      <Column>
        <TopPicks>
          {lessons.map((lesson) => (
            <LessonItem
              author={lesson.authorCard}
              key={lesson.slug}
              title={lesson.lessonName}
              readingTime={lesson.lessonContent.fields.readingTime.minutes}
              cover={lesson.cover}
            />
          ))}
        </TopPicks>
      </Column>

      <Column>
        <ReadingList></ReadingList>
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
`

const Column = styled.div`
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
