import Image, { FluidObject } from "gatsby-image"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulLesson,
  ContentfulWeekWeekDescriptionRichTextNode,
  Maybe,
} from "@graphql-types"
import colors from "@styles/colors"
import BookmarkButton from "@components/bookmark/BookmarkButtonSmall"
import { Icon } from "../Icons"
import { device } from "../Primitives"
import HtmlContent, { H3, H4 } from "@components/html/Html"

type Props = {
  name?: string | null
  path?: string | null
  duration?: number | null
  intro?: string | null
  lessons?: Maybe<Array<Maybe<ContentfulLesson>>>
  description: Maybe<ContentfulWeekWeekDescriptionRichTextNode>
  coverPhoto?: FluidObject | null
  slug?: string | null
  excerpt?: string | null
  bookmarked: boolean
}

export const WideWeekCard: FC<Props> = ({
  lessons,
  name,
  coverPhoto,
  path,
  intro,
  bookmarked,
  description,
}) => {
  const countHabits: number = lessons.reduce(
    (sum: number, currentValue: ContentfulLesson) => {
      return (sum += currentValue?.habit?.length
        ? currentValue?.habit?.length
        : 1)
    },
    0
  )

  const { t } = useTranslation()

  return (
    <Card to={`${path}`}>
      <Cover>
        <CoverPhoto fluid={coverPhoto as FluidObject} />
        <BookmarkButton loading={false} bookmarked={bookmarked} />
      </Cover>
      <Bottom>
        <Name>{name}</Name>
        <Introduction>{intro}</Introduction>

        <InformationRow>
          <Lessons>
            <Icon
              height="20px"
              width="20px"
              name="presentation"
              stroke="currentColor"
            />
            {lessons?.length} {t("LESSONS")}
          </Lessons>
          {!!countHabits && (
            <Habits>
              <Icon
                height="20px"
                width="20px"
                name="task"
                stroke="currentColor"
              />
              {countHabits > 1 && `${countHabits} ${t("HABITS")}`}
            </Habits>
          )}
        </InformationRow>
        <Description>
          <HtmlContent document={description} />
        </Description>
      </Bottom>
    </Card>
  )
}

const Card = styled(Link)`
  box-sizing: border-box;
  display: flex;
  margin: 3rem 1rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 1rem;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }

  @media ${device.desktopL} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
  }

  @media ${device.desktop} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
  }

  @media ${device.laptopL} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 1rem);
    flex: 1 1 calc(50% - 2 * 1rem);
  }

  @media ${device.tabletL} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
  }

  @media ${device.tablet} {
    max-width: calc(100% - 2 * 1rem);
    flex: 1 1 calc(100% - 2 * 1rem);
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

const Cover = styled.div`
  position: relative;
  width: 100%;
  min-height: 10rem;
  max-height: 20rem;
  overflow: hidden;
  flex: 1;
`

const CoverPhoto = styled(Image)`
  height: 100%;
  width: 100%;
`

const Bottom = styled.div`
  padding: 1rem;
  flex: 1;
  font-family: inherit;
`

const Name = styled(H4)`
  margin: 0rem 0rem 1rem 0rem;
`
const Introduction = styled.span`
  font-size: 1rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`
const Description = styled.div`
  font-size: 0.7rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const InformationRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0rem;
  margin: 1.5rem 0rem;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
`

const Lessons = styled.span`
  font-size: 0.9rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`
const Habits = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`
