import { H3 } from "@components/html/Html"
import { AddNight } from "@components/sleep/AddNight"
import { SleepInsightCards } from "@components/sleep/Cards"
import { NightTable } from "@components/sleep/NightTable"
import React, { FC } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"

const Sleep: FC = () => {
  const { t } = useI18next()

  return (
    <>
      <H3>{t("NAVIGATION.SLEEP")}</H3>
      <SleepInsightCards />
      <AddNight />

      <NightTable />
    </>
  )
}

export default Sleep
