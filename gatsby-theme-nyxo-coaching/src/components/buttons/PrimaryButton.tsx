import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  disabled?: boolean
  loading?: boolean
  onClick: () => void
  children: JSX.Element | string | null
}

export const PrimaryButton: FC<Props> = ({
  onClick,
  disabled,
  loading,
  children,
}) => {
  return (
    <Button disabled={disabled || loading} onClick={onClick}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  position: relative;
  background-color: var(--radiantBlue);
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem 2.5rem;
  transition: 0.2s ease-in-out;
  color: white;
  font-size: 1.1rem;
  outline: var(--radiantBlue);
  box-shadow: var(--shadow);
`
