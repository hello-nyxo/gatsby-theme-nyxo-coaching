import { useCreateNight } from "@hooks/useSleep"
import React, { FC, useRef } from "react"
import { NightValue } from "@API"
import styled from "styled-components"
import { PrimaryButton } from "@components/buttons/PrimaryButton"
import { H6 } from "@components/html/Html"
import { Auth } from "aws-amplify"
import { subHours, differenceInMinutes } from "date-fns"

export const AddNight: FC = () => {
  const ref = useRef<HTMLDivElement>()
  const { mutate } = useCreateNight()

  const createNight = async () => {
    const { username } = await Auth.currentUserInfo()
    const startDate = subHours(new Date(), 8)
    const endDate = new Date()
    const duration = differenceInMinutes(startDate, endDate)
    mutate({
      userId: username,
      startDate: startDate.toISOString(),
      totalDuration: duration,
      endDate: endDate.toISOString(),
      sourceName: "Nyxo",
      sourceId: "app.sleepcircle.application",
      value: NightValue.InBed,
    })
  }

  const toggle = () => {
    const height = ref.current?.scrollHeight + ref.current.style.padding
    if (ref.current?.style.maxHeight) {
      ref.current.style.maxHeight = null
    } else {
      ref.current.style.maxHeight = height + "px"
    }
  }

  return (
    <Container>
      <Title onClick={toggle}>Add new night</Title>

      <Row ref={ref}>
        <Column>
          <label htmlFor="start-time">Went to bed</label>
          <input name="start-time" type="time"></input>
        </Column>
        <Column>
          <label htmlFor="end-time">Woke up</label>
          <input name="end-time" type="time"></input>
        </Column>
        <PrimaryButton onClick={createNight}>Create</PrimaryButton>
      </Row>
    </Container>
  )
}

const Container = styled.div``

const Title = styled(H6)``

const Row = styled.div`
  border-radius: 0.4em;
  flex-direction: row;
  display: flex;
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  margin: 1rem 0rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`
