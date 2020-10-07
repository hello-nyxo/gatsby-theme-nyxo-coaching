import React, { FC } from "react"
import { isWithinInterval, parse, Interval } from "date-fns"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { device } from "@components/Primitives"

export const Hello: FC = () => {
  const { t } = useTranslation()
  return <Text>{t(getTitle())}</Text>
}

const Text = styled.span`
  font-size: 1rem;
  margin-left: 1rem;
  white-space: nowrap;
  padding-left: 1rem;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  border-left: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};

  @media ${device.tablet} {
    display: none;
  }
`

export const getTitle = (): string => {
  const format = "HH:mm:ss"
  const now = new Date()

  if (
    isWithinInterval(now, {
      start: parse("04:00:00", format, now),
      end: parse("11:59:59", format, now),
    })
  ) {
    return "GOOD_MORNING"
  }
  if (
    isWithinInterval(now, {
      start: parse("12:00:00", format, now),
      end: parse("16:59:59", format, now),
    })
  ) {
    return "GOOD_AFTERNOON"
  }
  if (
    isWithinInterval(now, {
      start: parse("17:00:00", format, now),
      end: parse("20:59:59", format, now),
    })
  ) {
    return "GOOD_EVENING"
  }
  return "GOOD_NIGHT"
}
