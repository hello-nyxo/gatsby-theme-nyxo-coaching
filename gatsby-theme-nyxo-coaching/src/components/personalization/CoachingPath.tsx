import { H4 } from "@components/html/Html"
import colors from "@styles/colors"
import { ContentfulWeek } from "@typings/gatsby-graphql"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  weeks: ContentfulWeek[]
}

export const CoachingPath: FC<Props> = ({ weeks }) => {
  return (
    <Container>
      <H4>COACHING.PATH_TITLE</H4>
      <Row>
        <ProgressContainer>
          <Line />
          {weeks.map((week, index) => (
            <Dot
              key={week.slug}
              completed
              x={Math.round((index / (weeks.length - 1)) * 100)}
            />
          ))}
          <ProgressLine />
        </ProgressContainer>
        <Weeks>
          {weeks.map((week, index) => (
            <Card key={week.slug}>
              <div>Week {index + 1}</div>
              <div>{week.weekName}</div>
            </Card>
          ))}
        </Weeks>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  padding: 2rem 0rem;
  border-bottom: 1px solid ${({ theme }) => theme.hairlineColor};
`

const Row = styled.div``

const Weeks = styled.div`
  margin: 2rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`
const Card = styled.div``

const Line = styled.div`
  height: 0.3rem;
  position: absolute;
  border-radius: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bgPrimary};
`

const ProgressLine = styled.div`
  position: absolute;
  height: 0.3rem;
  border-radius: 1rem;
  width: 33%;
  background-color: ${colors.radiantBlue};
`

const ProgressContainer = styled.div`
  position: relative;
  margin: 2rem;
  height: 1rem;
`

type DotProps = {
  x: number
  completed: boolean
}

const Dot = styled.div<DotProps>`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 2rem;
  position: absolute;
  top: calc(-1.5rem / 2 + 0.3rem / 2);
  left: ${({ x }) => x}%;
  background-color: ${({ theme, completed }) =>
    completed ? colors.radiantBlue : theme.bgPrimary};
`
