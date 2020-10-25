import { PrimaryButton } from "@components/buttons/PrimaryButton"
import { H5 } from "@components/html/Html"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  shouldShow: boolean
  children: React.ReactNode
}

export const ContentProtector: FC<Props> = ({ shouldShow, children }) => {
  if (shouldShow) {
    return <>{children}</>
  }

  return (
    <Container>
      <Title>Please subscribe to see this content</Title>

      <PrimaryButton onClick={() => {}}>Register</PrimaryButton>

      <p>Already have an account? Sign in</p>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 3rem;
`

const Title = styled(H5)`
  text-align: center;
`
