import { H5 } from "@components/html/Html"
import { useListRequests } from "@hooks/useRequest"
import React, { FC } from "react"
import styled from "styled-components"
import { CoachingRequestCard } from "./CoachingRequestCard"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { isCoach } from "@auth/auth"

export const CoachingRequests: FC = () => {
  const { data } = useListRequests()
  const { t } = useTranslation()

  return (
    <Container>
      <Title>
        {isCoach() ? t("REQUEST.SENT_TITLE") : t("REQUEST.RECEIVED_TITLE")}
      </Title>

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
