import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  disabled?: boolean
}

export const PrimaryButton = () => {
  return (
    <Button
      disabled={loading}
      onClick={onClick}
      bookmarked={bookmarked}></Button>
  )
}

const Button = styled.button``
