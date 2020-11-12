import { H6 } from "@components/html/Html"
import { format } from "date-fns"
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { Link } from "gatsby-plugin-react-i18next"
import {
  ContentfulAsset,
  ContentfulAuthor,
  ContentfulLessonLessonContentRichTextNodeFieldsReadingTime,
  Maybe,
} from "graphql-types"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  title?: string | null
  cover?: ContentfulAsset | null
  readingTime?: Maybe<
    ContentfulLessonLessonContentRichTextNodeFieldsReadingTime
  >
  author?: ContentfulAuthor | null
  weekName?: string | null
  weekSlug?: string | null
  updatedAt: string
}

export const LessonItem: FC<Props> = ({
  title,
  cover,
  readingTime,
  author,
  weekName,
  weekSlug,
  updatedAt,
}) => {
  return (
    <Container>
      <Column flex={1}>
        <Row>
          <AuthorPhoto
            as={Link}
            to={`/author/${author?.slug}`}
            fluid={author?.avatar?.fluid as FluidObject}
          />
          <LessonFrom>
            <Author to={`/author/${author?.slug}`}>{author?.name} </Author>
            in
            <Week to={`/week/${weekSlug}`}> {weekName}</Week>
          </LessonFrom>
        </Row>
        <Title>{title}</Title>
        {updatedAt && <Info>{format(new Date(updatedAt), "MMM, dd")}</Info>}
        <Info> · </Info>
        {readingTime && <Info>{`${readingTime} min read`}</Info>}
      </Column>

      <Column as={Link} to={`/week/${weekSlug}`}>
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
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`

const LessonFrom = styled.div`
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`

const AuthorPhoto = styled(Image)<GatsbyImageProps>`
  height: 1.2rem;
  width: 1.2rem;
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

const Cover = styled(Image)<GatsbyImageProps>`
  margin-left: 2rem;
  height: 5rem;
  width: 5rem;
  background-color: black;
`
