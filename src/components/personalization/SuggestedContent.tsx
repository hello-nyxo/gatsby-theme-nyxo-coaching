import React, { FC } from "react"
import styled from "styled-components"

export const SuggestedContent: FC = () => {
  return (
    <Container>
      <Column>
        <TopPick>
          <Cover />
        </TopPick>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  flex-direction: row;
`

const Column = styled.div``

const TopPick = styled.div``

const Cover = styled.div`
  background-color: black;
  height: 20rem;
  width: 20rem;
`
