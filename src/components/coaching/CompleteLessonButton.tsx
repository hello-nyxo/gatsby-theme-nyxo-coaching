import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { EventHandler, FC, MouseEvent } from "react"
import styled, { css } from "styled-components"
import { Icon } from "../Icons"

type Props = {
  completed: boolean | undefined
  loading: boolean
  onClick: EventHandler<MouseEvent<HTMLButtonElement>>
}

export const CompleteLessonButton: FC<Props> = ({
  completed,
  onClick,
  loading,
}) => {
  const { t } = useTranslation()

  return (
    <Container disabled={loading} onClick={onClick} completed={completed}>
      <HeartIcon
        height="25px"
        width="25px"
        completed={completed}
        viewBox="0 0 30 30"
      />
      <Text>{completed ? t("COMPLETE_LESSON") : t("COMPLETE_LESSON")}</Text>
    </Container>
  )
}

const Container = styled.button<HeartIconProps>`
  position: relative;
  background-color: white;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  transition: 0.2s ease-in-out;
  color: var(--radiantBlue);
  outline: var(--radiantBlue);
  box-shadow: var(--shadow);
  margin-right: 1rem;

  &:hover {
    background-color: var(--radiantBlue);
    transition: 0.2s;
    color: white;
  }
  &:active {
    box-shadow: inset 1px 1px 3px 3px #6d676712;
  }

  ${({ completed }) =>
    completed &&
    css`
      box-shadow: var(--shadow);
      background-color: white;
      &:active {
        box-shadow: inset 1px 1px 3px 3px #6d676712;
      }
    `}
`

const Text = styled.span`
  min-width: 9rem;
  display: block;
  font-size: 0.9rem;
  font-family: var(--medium);
`

type HeartIconProps = {
  completed: boolean
}

export const HeartIcon = styled(Icon).attrs(
  ({ completed }: HeartIconProps) => ({
    fill: "var(--radiantBlue)",
    stroke: "none",
    name: completed ? "checkSquare" : "heartBookmarkOutline",
  })
)<HeartIconProps>`
  margin: 0px;
  flex: 1;
`
