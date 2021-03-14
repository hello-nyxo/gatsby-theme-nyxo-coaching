import { H6 } from "@components/html/Html"
import { format } from "date-fns"
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { Link } from "gatsby-plugin-react-i18next"
import {
  ContentfulAsset,
  ContentfulAuthor,
  ContentfulLessonLessonContentRichTextNodeFieldsReadingTime,
  Maybe,
} from "@typings/gatsby-graphql"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  title?: string | null
  cover?: ContentfulAsset | null
  readingTime?: Maybe<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime>
  author?: ContentfulAuthor | null
  weekName?: string | null
  weekSlug?: string | null
  lessonSlug?: string | null
  updatedAt: string
}

export const LessonItem: FC<Props> = ({
  title,
  cover,
  readingTime,
  author,
  weekName,
  weekSlug,
  lessonSlug,
  updatedAt,
}) => {
  return (
    <Container>
      <Column flex={1}>
        <Row>
          <AuthorPhoto fluid={author?.avatar?.fluid as FluidObject} />
          <LessonFrom>
            <Author to={`/author/${author?.slug}`}>{author?.name} </Author>
            in
            <Week to={`/week/${weekSlug}`}> {weekName}</Week>
          </LessonFrom>
        </Row>
        <Column as={Link} to={`/lesson/${lessonSlug}`}>
          <Title>{title}</Title>
          {updatedAt && <Info>{format(new Date(updatedAt), "MMM, dd")}</Info>}
          <Info> · </Info>
          {readingTime && <Info>{`${readingTime} min read`}</Info>}
        </Column>
      </Column>

      <Column as={Link} to={`/lesson/${lessonSlug}`}>
        <Cover fluid={cover?.fluid as FluidObject} />
      </Column>
    </Container>
  )
}

const Title = styled(H6)`
  margin: 0;
  font-size: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.5rem;
  flex: 1;
`

type ColumnProps = {
  flex?: number | string
}
const Column = styled.div<ColumnProps>`
  flex: ${({ flex }) => (flex ? flex : "initial")};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`

const Info = styled.span`
  font-size: 0.75rem;
  display: inline-block;
  margin: 0.5rem 0.2rem 0.5rem 0.2rem;
  color: ${({ theme }) => theme.textColorSecondary};
`

const LessonFrom = styled.div`
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.textColorSecondary};
`

const AuthorPhoto = styled(Image)<GatsbyImageProps>`
  min-height: 1.2rem;
  min-width: 1.2rem;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  background-color: black;
`

const Author = styled(Link)`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontMedium};
  color: ${({ theme }) => theme.textColorPrimary};
`

const Week = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.textColorPrimary};
`

const Cover = styled(Image)<GatsbyImageProps>`
  margin-left: 2rem;
  height: 5rem;
  width: 5rem;
  background-color: black;
`
