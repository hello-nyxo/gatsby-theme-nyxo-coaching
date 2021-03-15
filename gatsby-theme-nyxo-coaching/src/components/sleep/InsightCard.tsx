import { SkeletonText } from "@components/animated/SkeletonText"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  loading: boolean
  title: string
  value: string | undefined | number
}

export const InsightCard: FC<Props> = ({ loading, title, value }) => {
  return (
    <Container>
      <Title isLoading={loading}>{title}</Title>

      <SkeletonText isLoading={loading}>
        <Value>{value}</Value>
      </SkeletonText>
    </Container>
  )
}

const Container = styled.div`
  padding: 1.5rem;
  width: 25%;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
`

const Title = styled(SkeletonText)`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.1rem;
  display: inline-block;
`

const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.buttonColorPrimary};
`
