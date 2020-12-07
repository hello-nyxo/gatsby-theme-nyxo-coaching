import { H5, P } from "@components/html/Html"
import { useGetActiveCoaching } from "@hooks/useUser"
import React, { FC } from "react"
import styled from "styled-components"
import { PrimaryButton } from "@components/buttons/PrimaryButton"
import { useCreateCoaching } from "@hooks/useCoaching"
import { getTimeOrDistance } from "@helpers/time"
import { ContentfulLesson } from "graphql-types"
// Ei aloitettu
// Aloitettu / kesken
// Voi lopettaa
// Lopetettu

type Props = {
  slug: string | undefined | null
  lessons: ContentfulLesson[]
}

export const CoachingPrompt: FC<Props> = ({ slug, lessons }) => {
  const { data } = useGetActiveCoaching()
  const [start] = useCreateCoaching()

  const startCoaching = () => {
    start()
  }

  const startWeek = () => {}
  const completeWeek = () => {}

  if (!data) {
    return (
      <Container>
        <H5>Aloita valmennus</H5>
        <P>
          Ennenkuin voit merkitä viikkoja ja oppitunteja suoritetuksi sinun on
          aloitettava univalmennus.
        </P>
        <PrimaryButton onClick={startCoaching}>COACHING.</PrimaryButton>
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

      <Time>Viikko aloitettu {getTimeOrDistance(data?.started)}</Time>
      <Time>{getTimeOrDistance(data?.ended)}</Time>

      {completedThisWeek ? (
        <div>
          Olet suorittanut tältä viikolta: {completedThisWeek.length} oppituntia
        </div>
      ) : null}

      <PrimaryButton onClick={completeWeek}>
        COACHING.COMPLETE_WEEK
      </PrimaryButton>

      {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  box-shadow: ${({ theme }) => theme.SHADOW};
  border-radius: 0.5rem;
  top: 5rem;
`

const Time = styled.div`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONT_REGULAR};
  font-size: 0.75rem;
`
