import HabitCard from "@components/habit/HabitCard"
import { H3 } from "@components/html/Html"
import { API, graphqlOperation } from "aws-amplify"
import React, { FC } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { GetHabitQuery, ListHabitsQuery } from "../../API"
import { listHabits } from "../../graphql/queries"

type Habit = Omit<Exclude<GetHabitQuery["getHabit"], null>, "__typename">

const getHabits = async (): Promise<Array<Habit | null> | null | undefined> => {
  try {
    const response = (await API.graphql(graphqlOperation(listHabits, {}))) as {
      data: ListHabitsQuery
    }
    return response?.data?.listHabits?.items
  } catch (error) {
    console.warn(error)
    return undefined
  }
}

const UserHabits: FC = () => {
  const { isLoading, data, error } = useQuery("habits", () => getHabits())

  return (
    <>
      <H3>Habits</H3>
      <Habits>
        {data?.map((habit) => (
          <HabitCard
            key={habit?.id}
            title={habit?.title}
            period={habit?.period}
            excerpt={habit?.description}
          />
        ))}
      </Habits>
    </>
  )
}

export default UserHabits

const Habits = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`
