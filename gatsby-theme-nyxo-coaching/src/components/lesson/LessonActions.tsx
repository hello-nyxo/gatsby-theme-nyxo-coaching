import { isLoggedIn } from "@auth/auth"
import { CompleteLessonButton } from "@components/coaching/CompleteLessonButton"
import { useCompleteLesson, useGetLesson } from "@hooks/useCoaching"
import { useGetActiveCoaching } from "@hooks/useUser"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  slug: string
}

export const LessonActions: FC<Props> = ({ slug }) => {
  const { mutate: update, isLoading: completeLoading } = useCompleteLesson()
  const { data: activeCoaching } = useGetActiveCoaching()
  const { data: lessonCompleted } = useGetLesson(slug as string)

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
  }

  return (
    <Row>
      <CompleteLessonButton
        onClick={handleComplete}
        loading={completeLoading}
        completed={lessonCompleted}
      />
    </Row>
  )
}

const Row = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.hairlineColor};
  padding-bottom: 1rem;
`
