import { H3 } from "@components/html/Html"
import React, { FC } from "react"
import UserInfo from "../Info"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Container } from "@components/Primitives"

export const Settings: FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <H3>{t("SETTINGS")}</H3>
      <UserInfo />
    </Container>
  )
}
