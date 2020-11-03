import { format } from "date-fns"
import React, { FC } from "react"
import { Icon } from "../Icons"
import styled from "styled-components"
import { GetCoachingDataQuery } from "../../API"
import { H5 } from "@components/html/Html"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { stringToColor } from "@helpers/color"

export type CoachingData = Omit<
  Exclude<GetCoachingDataQuery["getCoachingData"], null>,
  "__typename" | "user"
> | null

type Props = {
  coaching?: CoachingData
}

const CoachingCard: FC<Props> = ({ coaching }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <Column>
        <Stripe color={stringToColor(`${coaching?.id}`)} />
      </Column>
      <Column>
        <Row>
          <Column>
            <H5>
              {`${
                coaching?.started &&
                format(new Date(coaching?.started), "dd.MM.yyyy")
              }`}
            </H5>

            <Info></Info>
            <div>
              {t("COACHING.ACTIVE_WEEK")} {coaching?.activeWeek}
            </div>
          </Column>

          <Column>
            <Lessons>
              <Icon
                height="20px"
                width="20px"
                name="presentation"
                stroke="currentColor"
              />
              {coaching?.lessons?.length} {t("LESSONS")}
            </Lessons>
            <Weeks>
              <Icon
                height="20px"
                width="20px"
                name="presentation"
                stroke="currentColor"
              />
              {coaching?.weeks?.length} {t("WEEKS")}
            </Weeks>
          </Column>
        </Row>
      </Column>
    </Card>
  )
}

export default CoachingCard

const Card = styled.div`
  padding: 1rem;
  background-color: var(--secondaryBg);
  box-shadow: var(--shadow);
  margin: 1rem 0rem;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  max-width: 500px;
  ${H5} {
    margin: 0 0 0.5rem 0;
  }
`

type StripeProps = {
  color: string
}
const Stripe = styled.div<StripeProps>`
  background-color: ${({ color }) => color ?? "black"};
  height: 100%;
  box-sizing: border-box;
  display: block;
  border-radius: 5px;
  width: 5px;
  margin-right: 16px;
  opacity: 0.5;
`

const Column = styled.div``

const Info = styled.div``

const Lessons = styled.span`
  background-color: #f6f8ff;
  margin: 0rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  display: block;
  margin: 0 0 1rem 0rem;
`

const Weeks = styled.span`
  background-color: #f6f8ff;
  margin: 0rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  display: block;
  margin: 0 0 1rem 0rem;
`

const Row = styled.div`
  display: flex;
  box-sizing: border-box;
`
