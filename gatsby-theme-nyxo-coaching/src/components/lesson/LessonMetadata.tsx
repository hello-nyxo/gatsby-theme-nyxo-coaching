import { isLoggedIn } from "@auth/auth"
import { Icon } from "@components/Icons"
import { useCompleteLesson, useGetLesson } from "@hooks/useCoaching"
import { useGetActiveCoaching } from "@hooks/useUser"
import colors from "@styles/colors"
import { ContentfulLessonWeightsJsonNode } from "@typings/gatsby-graphql"
import React, { FC } from "react"
import styled from "styled-components"
import { Tooltip } from "react-tippy"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

type Props = {
  slug: string
  weights: ContentfulLessonWeightsJsonNode | undefined | null
}

export const LessonMetadata: FC<Props> = ({ slug, weights }) => {
  const { mutate: update, isLoading: completeLoading } = useCompleteLesson()
  const { data: activeCoaching } = useGetActiveCoaching()
  const { data: lessonCompleted } = useGetLesson(slug as string)
  const { t } = useTranslation()

  if (!isLoggedIn()) {
    return null
  }

  const handleComplete = async () => {
    const existingLessons = activeCoaching?.lessons ?? []
    await update({
      lesson: slug as string,
      id: activeCoaching?.id as string,
      existingLessons,
    })
    trackCustomEvent({
      category: "Complete lesson button",
      action: "Click",
      label: `${slug}`,
    })
  }

  return (
    <Row>
      {!!weights && (
        <Weights>
          <Tooltip
            title={t("WEIGHT.DURATION")}
            position="bottom"
            trigger="mouseenter">
            <Item>
              <Type name="clockBold" />
              <Figure>{weights?.duration}%</Figure>
            </Item>
          </Tooltip>

          <Tooltip
            title={t("WEIGHT.JETLAG")}
            position="bottom"
            trigger="mouseenter">
            <Item>
              <Type name="socialJetLag" />
              <Figure>{weights?.jetlag}%</Figure>
            </Item>
          </Tooltip>

          <Tooltip
            title={t("WEIGHT.EFFICIENCY")}
            position="bottom"
            trigger="mouseenter">
            <Item>
              <Type name="efficiency" />
              <Figure>{weights?.efficiency}%</Figure>
            </Item>
          </Tooltip>

          <Tooltip
            title={t("WEIGHT.CONSISTENCY")}
            position="bottom"
            trigger="mouseenter">
            <Item>
              <Type name="consistency" />
              <Figure>{weights?.consistency}%</Figure>
            </Item>
          </Tooltip>
        </Weights>
      )}
    </Row>
  )
}

const Type = styled(Icon).attrs(() => ({
  fill: colors.afternoonAccent,
  stroke: "none",
  viewBox: `0 0 ${25} ${25}`,
  height: 15,
  width: 15,
}))`
  margin: 0 0.5rem 0 0;
  background-color: ${colors.afternoon};
  padding: 0.5rem;
  border-radius: 0.4rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
`

const Row = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  padding-bottom: 1rem;
  width: 100%;
  overflow-x: scroll;
`

const Weights = styled.div`
  display: flex;
  flex-direction: row;
`

const Figure = styled.div`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
`
