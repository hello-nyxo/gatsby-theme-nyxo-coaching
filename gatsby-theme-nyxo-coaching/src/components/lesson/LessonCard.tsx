import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { Link } from "gatsby-plugin-react-i18next"
import React, { EventHandler, FC, MouseEvent } from "react"
import styled from "styled-components"
import { ContentfulLesson } from "@typings/gatsby-graphql"
import { truncate } from "../../helpers/truncater"
import BookmarkButton from "../bookmark/BookmarkButtonSmall"
import { Icon } from "../Icons"
import { device } from "../Primitives"

type Props = {
  name?: string | null
  path?: string | null
  readingTime?: number | null
  excerpt?: string | null
  cover?: FluidObject | null
  lesson?: ContentfulLesson | null
  slug: string
  key?: string
  loading: boolean
  onClick?: EventHandler<MouseEvent<HTMLButtonElement>>
  bookmarked?: boolean
}

const LessonCard: FC<Props> = ({
  path = `/`,
  name,
  readingTime = 3,
  excerpt,
  cover,
  lesson,
  slug,
  onClick,
  loading = true,
  bookmarked = false,
}) => {
  const countHabits = lesson?.habit?.length
  return (
    <Card to={path as string}>
      <ImageContainer>
        <Cover fluid={cover as FluidObject} />
        <BookmarkButton
          onClick={onClick}
          loading={loading}
          bookmarked={bookmarked}
        />
        <Wrap>
          <Icon height="15px" width="15px" name="clock" />
          <ReadingTime>{JSON.stringify(readingTime)}m</ReadingTime>
          {!!countHabits && (
            <Habits>
              <Icon height="20px" width="20px" name="task" />
              {countHabits}
            </Habits>
          )}
        </Wrap>
      </ImageContainer>
      <InnerContent>
        <Name>{name}</Name>
        <Excerpt>{truncate(excerpt, 100, true)}</Excerpt>
      </InnerContent>
    </Card>
  )
}

export default LessonCard

const Card = styled(Link)`
  margin: 1rem 0.5rem;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 5px;
  border: 1px solid white;
  width: 100%;

  picture {
    opacity: 1;
    transition: 0.2s ease-in-out opacity;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    picture {
      opacity: 0.8;
    }
  }

  @media ${device.desktopL} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(25% - 2 * 0.5rem);
    flex: 1 1 calc(25% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
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

const ImageContainer = styled.div`
  height: 10rem;
  background-color: black;
  margin-bottom: 1rem;
  position: relative;
`
const Cover = styled(Image)<GatsbyImageProps>`
  height: 100%;
  width: 100%;
`

const Name = styled.h3`
  margin: 0;
  font-weight: bold;
  font-style: normal;
  font-family: var(--semibold);
  color: var(--textPrimary);
`

const ReadingTime = styled.span``

const Excerpt = styled.p`
  font-size: 0.9rem;
  color: var(--textSecondary);
  line-height: 22px;
`

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  color: white;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  background: linear-gradient(
    rgba(53, 53, 53, 0),
    rgba(23, 23, 23, 0.6313725490196078)
  );
  svg {
    margin-right: 10px;
    stroke: white;
  }
`
const Habits = styled.span`
  margin-left: 1rem;
  font-size: 0.9rem;
  display: inline-block;
`

const InnerContent = styled.div`
  padding: 0rem 0.5rem 1rem;
`
