import { AddCoacheeSection } from "@components/coach/AddCoacheeSection"
import { H3 } from "@components/html/Html"
import { Container } from "@components/Primitives"
import { CoachingRequests } from "@components/request/CoachingRequests"
import { CoacheeTable } from "@components/tables/CoacheeTable"
import { useListRequests } from "@hooks/useRequest"
import React, { FC } from "react"

export const Coachees: FC = () => {
  const { data } = useListRequests()

  return (
    <Container>
      <H3>Coachees</H3>

      <AddCoacheeSection />
      <CoachingRequests />
      <CoacheeTable />
    </Container>
  )
}
