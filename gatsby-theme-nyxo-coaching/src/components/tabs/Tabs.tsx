import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  isActive: boolean
  linkClassName: string
  tabIndex: number
  onClick: (tabIndex: number) => void
  name: string
}

export const Tab: FC<Props> = ({
  isActive,
  linkClassName,
  tabIndex,
  onClick,
  name,
}) => {
  const handleClick = (event: MouseEvent) => {
    if (!isActive) {
      event.preventDefault()
      onClick(tabIndex)
    }
  }

  return (
    <TabContainer>
      <a
        className={`tab-link ${linkClassName} ${isActive ? "active" : ""}`}
        onClick={handleClick}>
        {name}
      </a>
    </TabContainer>
  )
}

const TabContainer = styled.li``
