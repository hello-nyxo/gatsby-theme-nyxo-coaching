import { Icon } from "@components/Icons"
import { getFirstAuthor } from "@helpers/author"
import { useFormat } from "@hooks/useTime"
import { ContentfulAuthor, Maybe } from "@typings/gatsby-graphql"
import React, { FC } from "react"
import styled from "styled-components"
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { useReadingTime } from "@hooks/locale/useReadingTime"

type Props = {
  pageViews: { totalCount: number }[]
  authorCards: Maybe<Array<Maybe<ContentfulAuthor>>> | null | undefined
  readingTime: number | undefined | null
  updatedAt: string | undefined | null
}

export const LessonStats: FC<Props> = ({
  pageViews,
  authorCards,
  readingTime,
  updatedAt,
}) => {
  const format = useFormat()
  const mainAuthor = getFirstAuthor(authorCards)
  const views = pageViews.reduce((acc, curr) => curr.totalCount + acc, 0)
  const { short, long } = useReadingTime(readingTime)

  return (
    <Author>
      {!!mainAuthor?.avatar && (
        <Avatar fluid={mainAuthor?.avatar?.fluid as FluidObject} />
      )}
      <Column>
        <Name>{mainAuthor?.name}</Name>

        <InfoItemContainer>
          {updatedAt && (
            <Updated dateTime={updatedAt}>
              {format(new Date(updatedAt))}
            </Updated>
          )}
          <ClockIcon />
          <Info>{`${short}`}</Info>
          <EyeIcon />
          <PageViews>{views}</PageViews>
        </InfoItemContainer>
      </Column>
    </Author>
  )
}

const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled(Image)<GatsbyImageProps>`
  height: 3rem;
  width: 3rem;
  border-radius: 3rem;
  margin-right: 0.5rem;
`

const Info = styled.span`
  font-family: ${({ theme }) => theme.fontMedium};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textColorSecondary};
  margin-right: 0.75rem;
`

const Updated = styled.time`
  font-family: ${({ theme }) => theme.fontMedium};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textColorSecondary};
  margin-right: 0.75rem;
`

const Column = styled.div``

const Name = styled.div`
  font-family: ${({ theme }) => theme.fontMedium};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColorPrimary};
  margin-bottom: 0.5rem;
`

const ClockIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "none",
  name: "clock",
  stroke: theme.textColorSecondary,
  viewBox: `0 0 ${30} ${30}`,
  height: 15,
  width: 15,
}))``

const EyeIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "none",
  name: "eye",
  stroke: theme.textColorSecondary,
  viewBox: `0 0 ${25} ${25}`,
  height: 15,
  width: 15,
}))``

const PageViews = styled.span`
  font-family: ${({ theme }) => theme.fontMedium};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textColorSecondary};
`

const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
