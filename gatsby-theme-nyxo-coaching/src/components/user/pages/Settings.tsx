import { H3 } from "@components/html/Html"
import { useListRequests } from "@hooks/useRequest"
import { useGetUser } from "@hooks/useUser"
import React, { FC } from "react"
import styled from "styled-components"
import UserInfo from "../Info"

export const Settings: FC = () => {
  const { data } = useGetUser()

  return (
    <Container>
      <H3>Settings</H3>
      <UserInfo />

      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </Container>
  )
}

const Container = styled.div``
