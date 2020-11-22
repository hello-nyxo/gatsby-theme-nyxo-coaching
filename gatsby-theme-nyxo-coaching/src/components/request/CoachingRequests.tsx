import { H5 } from "@components/html/Html"
import { useListRequests } from "@hooks/useRequest"
import React, { FC } from "react"
import styled from "styled-components"
import { CoachingRequestCard } from "./CoachingRequestCard"

export const CoachingRequests: FC = () => {
  const { data } = useListRequests()
  console.log(data)

  return (
    <Container>
      <Title>Coaching requests</Title>

      {data?.items?.map((request) => (
        <CoachingRequestCard
          key={request?.id}
          created={request?.createdAt}
          sender={request?.userId}
          id={request?.id}
        />
      ))}
    </Container>
  )
}

const Container = styled.div``

const Title = styled(H5)``
