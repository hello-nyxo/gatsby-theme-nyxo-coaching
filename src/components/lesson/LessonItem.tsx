import { H5, H6 } from "@components/html/Html"
import { Link } from "gatsby-plugin-react-i18next"
import Image, { GatsbyImageProps } from "gatsby-image"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulAuthor } from "graphql-types"

type Props = {
  title: string
  cover: FluidObject
  readingTime: number
  author: ContentfulAuthor
}

export const LessonItem: FC<Props> = ({
  title,
  cover,
  readingTime,
  author,
}) => {
  return (
    <Container>
      <Column flex={1}>
        <Row>
          <AuthorPhoto fluid={cover.fluid} />
          <LessonFrom>
            <Author to={author.slug}>Pietari Nurmi </Author>
            in
            <Week to="pietari-nurmi"> Understanding Sleep</Week>
          </LessonFrom>
        </Row>
        <Title>{title}</Title>
        <ReadingTime>{`${Math.ceil(readingTime)} min read`}</ReadingTime>
      </Column>

      <Column>
        <Cover fluid={cover.fluid} />
      </Column>
    </Container>
  )
}

const Title = styled(H6)`
  margin: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.5rem;
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

const ReadingTime = styled.span`
  font-size: 0.9rem;
  display: inline-block;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
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

const Cover = styled(Image)<GatsbyImageProps>`
  margin-left: 2rem;
  height: 5rem;
  width: 5rem;
  background-color: black;
`
