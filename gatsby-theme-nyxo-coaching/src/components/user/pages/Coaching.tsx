import React, { FC } from "react"
import styled from "styled-components"
import UserHabits from "../Habits"
import CoachingSection from "../Coaching"
export const Coaching: FC = () => {
  return (
    <Container>
      <CoachingSection />
      <UserHabits />
    </Container>
  )
}

const Container = styled.div``
