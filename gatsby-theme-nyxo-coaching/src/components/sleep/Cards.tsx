import { useGetSleep } from "@hooks/useSleep"
import React, { FC } from "react"
import { ListNightsQuery, NightValue } from "@API"
import styled from "styled-components"
import { InsightCard } from "./InsightCard"
import { getDurationToTime } from "@helpers/time"

export const SleepInsightCards: FC = () => {
  const { data, isLoading } = useGetSleep()
  const duration = averageInBed(data)

  console.log(duration)
  return (
    <Container>
      <InsightCard
        title="Pituus"
        loading={isLoading}
        value={duration ? `${getDurationToTime(duration)}` : "-"}
      />
      <InsightCard
        title="Uni-ikkuna"
        loading={isLoading}
        value={duration ? `${duration}` : "-"}
      />
      <InsightCard
        title="Herääminen"
        loading={isLoading}
        value={duration ? `${duration}` : "-"}
      />
      <InsightCard
        title="Nukahtaminen"
        loading={isLoading}
        value={duration ? `${duration}` : "-"}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 -0.5rem;
`

const averageInBed = (night: ListNightsQuery["listNights"]) =>
  (night?.items
    ?.filter((night) => night?.value === NightValue.InBed)
    .reduce((average, value) => average + (value?.totalDuration ?? 0), 0) ??
    1) / (night?.items?.length ?? 1)
