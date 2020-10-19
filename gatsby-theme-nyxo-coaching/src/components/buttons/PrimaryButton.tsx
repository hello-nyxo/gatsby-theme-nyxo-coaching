import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  disabled?: boolean
  loading?: boolean
  onClick: () => void
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

const Button = styled.button``
