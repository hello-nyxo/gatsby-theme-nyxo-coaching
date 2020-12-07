import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC, InputHTMLAttributes } from "react"
import styled from "styled-components"

type Props = {
  touched?: boolean
  error?: string
  name: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField: FC<Props> = ({ touched, error, name, ...rest }) => {
  const { t } = useTranslation()

  return (
    <InputContainer>
      <Title>{t(name)}</Title>
      <InputField {...rest} />
      <Errors>{touched && error && <Error>{t(error)}</Error>}</Errors>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem 1rem;
`

const Title = styled.label`
  display: block;
  font-size: 0.9rem;
  padding: 0rem 0rem 0.5rem 0.5rem;
  font-family: ${({ theme }) => theme.FONT_BOLD};
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const Errors = styled.div`
  padding: 0.5rem 0rem;
  height: 1rem;
`

const InputField = styled.input`
  border-radius: 7px;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  outline: none;
  border: none;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;

  &:focus,
  :hover {
    background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
    box-shadow: 0 0 0 4px rgba(76, 132, 234, 0.1);
  }
`

const Error = styled.span`
  color: ${({ theme }) => theme.errorColor};
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  font-size: 0.6rem;
`
