import React, { FC } from "react"
import styled from "styled-components"

export const ProfilePicture: FC = () => {
  return <Container></Container>
}

const Container = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.PRIMARY_BUTTON_COLOR};
  background-color: ${({ theme }) => theme.HAIRLINE_COLOR};
  margin: 0 0.5rem;
`
