import { H5, H6 } from "@components/html/Html"
import { device } from "@components/Primitives"
import { format } from "date-fns"
import Image, { GatsbyImageProps } from "gatsby-image"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { ContentfulLesson } from "@typings/gatsby-graphql"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  lessons: ContentfulLesson[]
}

export const RecentlyUpdated: FC<Props> = ({ lessons }) => {
  const { t } = useTranslation()

  return (
    <Container>
      <H5>{t("INDEX.RECENTLY_UPDATED")}</H5>
      <Lessons>
        {lessons.map((lesson, index) => (
          <UpdatedCard key={lesson.slug}>
            <Column>
              <NumberContainer>
                <Number>{`0${index + 1}`}</Number>
              </NumberContainer>
            </Column>
            <Column>
              <Row>
                <AuthorPhoto
                  fluid={lesson.authorCard[0].avatar?.fluid as FluidObject}
                />
                <LessonFrom>
                  <Author to={`/author/${lesson.authorCard[0].slug}`}>
                    {lesson.authorCard[0].name}{" "}
                  </Author>
                  in
                  <Week to={`/week/${lesson.week[0]?.slug}`}>
                    {" "}
                    {lesson.week[0].weekName}
                  </Week>
                </LessonFrom>
              </Row>
              <Column as={Link} to={`/lesson/${lesson.slug}`}>
                <Title>{lesson.lessonName}</Title>
                {lesson.updatedAt && (
                  <Info>{format(new Date(lesson.updatedAt), "MMM, dd")}</Info>
                )}
                <Info> · </Info>
                <Info>{`${lesson.fields.readingTime} min read`}</Info>
              </Column>
            </Column>
          </UpdatedCard>
        ))}
      </Lessons>
    </Container>
  )
}

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  padding: 0rem 0rem 2rem;
  margin-bottom: 2rem;
`

const Lessons = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`

const UpdatedCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0rem 1rem 1rem;

  @media ${device.desktopL} {
    max-width: calc(33.3333% - 2 * 1rem);
    flex: 1 1 calc(33.3333% - 2 * 1rem);
  }

  @media ${device.desktop} {
    max-width: calc(33.3333% - 2 * 1rem);
    flex: 1 1 calc(33.3333% - 2 * 1rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 1rem);
    flex: 1 1 calc(33.3333% - 2 * 1rem);
  }

  @media ${device.laptop} {
    max-width: calc(33.3333% - 2 * 1rem);
    flex: 1 1 calc(33.3333% - 2 * 1rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 1rem);
    flex: 1 1 calc(50% - 2 * 1rem);
  }

  @media ${device.tablet} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`

const NumberContainer = styled.div`
  padding: 0rem 1rem;
`
const Number = styled.span`
  font-size: 1.5rem;
  color: #d8d8d8;
  font-weight: bold;
  font-style: normal;
  font-family: ${({ theme }) => theme.FONT_BOLD};
`

const Column = styled.div``

const Title = styled(H6)`
  margin: 0;
  font-size: 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`

const Info = styled.span`
  font-size: 0.75rem;
  display: inline-block;
  margin: 1rem 0.2rem 1rem 0.2rem;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`

const LessonFrom = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`

const AuthorPhoto = styled(Image)<GatsbyImageProps>`
  min-height: 1.2rem;
  min-width: 1.2rem;
  border-radius: 0.3rem;
  margin-right: 1rem;
  background-color: black;
`

const Author = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const Week = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`
