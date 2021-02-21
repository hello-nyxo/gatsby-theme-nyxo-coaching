import React, { FC } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

export const ProfilePicture: FC = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 0.5rem;
`
