import { H5, P } from "@components/html/Html"
import { useGetActiveCoaching } from "@hooks/useUser"
import React, { FC } from "react"
import styled from "styled-components"
import { PrimaryButton } from "@components/buttons/PrimaryButton"
import { useCreateCoaching } from "@hooks/useCoaching"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { isLoggedIn } from "@auth/auth"
import { ContentfulLesson } from "@typings/gatsby-graphql"

type Props = {
  slug: string | undefined | null
  lessons: ContentfulLesson[]
}

export const CoachingPrompt: FC<Props> = ({ slug, lessons }) => {
  const { t } = useTranslation()
  const { data } = useGetActiveCoaching()
  const { mutate: start } = useCreateCoaching()

  const startCoaching = () => {
    start()
  }

  const startWeek = () => {}
  const completeWeek = () => {}

  if (!isLoggedIn()) {
    ;<Container>
      <H5>{t("COACHING_PROGRESS.REGISTER")}</H5>
      <P>{t("COACHING_PROGRESS.REGISTER_TEXT")}</P>
      <PrimaryButton onClick={startCoaching}>
        {t("COACHING_PROGRESS.REGISTER_BUTTON")}
      </PrimaryButton>
    </Container>
  }

  if (!data) {
    return (
      <Container>
        <H5>{t("COACHING_PROGRESS.START_COACHING")}</H5>
        <P>{t("COACHING_PROGRESS.START_COACHING_TEXT")}</P>
        <PrimaryButton onClick={startCoaching}>
          {t("COACHING_PROGRESS.START_COACHING_BUTTON")}
        </PrimaryButton>
      </Container>
    )
  }

  const activeWeek = data?.weeks?.find((week) => week?.slug === slug)
  const completedThisWeek = lessons.filter((lesson) => {
    if (data?.lessons?.some((l) => l === lesson?.slug)) {
      return true
    }
    return false
  })

  return (
    <Container>
      <H5></H5>
      {/* <Time>Viikko aloitettu {getTimeOrDistance(data?.started)}</Time>
      <Time>{getTimeOrDistance(data?.ended)}</Time> */}
      <PrimaryButton onClick={completeWeek}>
        {t("COACHING_PROGRESS.COMPLETE_WEEK")}
      </PrimaryButton>
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.hairlineColor};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0.5rem;
  top: 5rem;
`

const Time = styled.div`
  color: ${({ theme }) => theme.textColorSecondary};
  font-family: ${({ theme }) => theme.fontRegular};
  font-size: 0.75rem;
`
