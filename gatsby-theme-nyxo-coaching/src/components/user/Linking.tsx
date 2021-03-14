import { H4, P } from "@components/html/Html"
import { Formik } from "formik"
import React, { FC } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"

export const Linking: FC = () => {
  const submitCode = ({ code }: { code: string }) => {}
  const { t } = useTranslation()
  return (
    <Container>
      <H4>LINKING.TITLE</H4>

      <P></P>
      <Formik initialValues={{ code: "" }} onSubmit={submitCode}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <CodeInput>
              <FieldLabel>{t("LINKING.CODE_LABEL")}</FieldLabel>

              <InputField
                onChange={handleChange("code")}
                placeholder="Code"
                name="code"
                value={values.code}
              />
            </CodeInput>
          </>
        )}
      </Formik>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: 1rem;
  border-radius: 2px;

  ${H4} {
    margin: 0;
  }
`

const CodeInput = styled.div``

const InputField = styled.input`
  border-radius: 7px;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.bgSecondary};
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;

  &:focus,
  :hover {
    background-color: ${({ theme }) => theme.bgSecondary};
    box-shadow: 0 0 0 4px rgba(76, 132, 234, 0.1);
  }
`

const FieldLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.textColorPrimary};
`
