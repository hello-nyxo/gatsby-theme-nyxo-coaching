import React, { FC } from "react"
import UserHabits from "../Habits"
import CoachingSection from "../Coaching"
import { Container } from "@components/Primitives"
export const Coaching: FC = () => {
  return (
    <Container>
      <CoachingSection />
      <UserHabits />
    </Container>
  )
}
