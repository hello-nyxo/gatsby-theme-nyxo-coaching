import { H3, P } from "@components/html/Html"
import React, { FC } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import { useCompleteLesson, useGetLesson } from "@hooks/useCoaching"
import { useGetActiveCoaching } from "@hooks/useUser"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

type Props = {
  slug: string
}

export const CompleteLesson: FC<Props> = ({ slug }) => {
  const { mutate: update, isLoading: completeLoading } = useCompleteLesson()
  const { data: activeCoaching } = useGetActiveCoaching()
  const { data: lessonCompleted } = useGetLesson(slug as string)

  const handleComplete = async () => {
    const existingLessons = activeCoaching?.lessons ?? []
    await update({
      lesson: slug as string,
      id: activeCoaching?.id as string,
      existingLessons,
    })
  }

  const likeAction = () => {
    handleComplete()

    trackCustomEvent({
      category: "Complete lesson button",
      action: "Liked content",
      label: `${slug}`,
    })
  }
  const notLikeAction = () => {
    handleComplete()

    trackCustomEvent({
      category: "Complete lesson button",
      action: "Didn't like content",
      label: `${slug}`,
    })
  }

  const { t } = useTranslation()
  return (
    <Container>
      <H3>{t("READY_TO_COMPLETE.TITLE")}</H3>
      <P>{t("READY_TO_COMPLETE.TEXT")}</P>

      <Buttons>
        <Button onClick={likeAction}>{t("READY_TO_COMPLETE.NO_BUTTON")}</Button>
        <Button onClick={notLikeAction}>
          {t("READY_TO_COMPLETE.YES_BUTTON")}
        </Button>
      </Buttons>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 4rem;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Button = styled.button`
  margin: 0.5rem;
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.titleColor};
  border: 2px solid currentColor;
`
