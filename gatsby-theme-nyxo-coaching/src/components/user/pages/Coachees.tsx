import { H3 } from "@components/html/Html"
import { useListUsers } from "@hooks/useUsers"
import React, { FC } from "react"
import styled from "styled-components"

export const Coachees: FC = () => {
  const { data } = useListUsers()

  return (
    <Container>
      <H3>Coachees</H3>

      <pre>{JSON.stringify(data?.items, undefined, 2)}</pre>
    </Container>
  )
}

const Container = styled.div``
