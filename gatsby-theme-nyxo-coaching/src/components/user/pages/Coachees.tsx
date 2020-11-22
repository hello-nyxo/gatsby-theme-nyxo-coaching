import { AddCoacheeSection } from "@components/coach/AddCoacheeSection"
import { H3 } from "@components/html/Html"
import { CoachingRequests } from "@components/request/CoachingRequests"
import { CoacheeTable } from "@components/tables/CoacheeTable"
import { useListRequests } from "@hooks/useRequest"
import React, { FC } from "react"
import styled from "styled-components"

export const Coachees: FC = () => {
  const { data } = useListRequests()

  console.log(data)
  return (
    <Container>
      <H3>Coachees</H3>

      <AddCoacheeSection />
      <CoachingRequests />
      <CoacheeTable />
    </Container>
  )
}

const Container = styled.div``
