import { useCreateRequest } from "@hooks/useRequest"
import React, { FC } from "react"
import styled from "styled-components"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import { TextField } from "@components/fields/TextField"
import { H5, P } from "@components/html/Html"
import { useTranslation } from "gatsby-plugin-react-i18next"

export const AddCoacheeSection: FC = () => {
  const [mutate, { isError, error }] = useCreateRequest()
  const { t } = useTranslation()

  const createNewRequest = ({ email }, { resetForm, setErrors }) => {
    mutate({
      email: email,
    })
    if (isError) {
      setErrors({ email: error })
    }
    resetForm()
  }

  return (
    <Container>
      <Title>{t("REQUEST.TITLE")}</Title>
      <P>{t("REQUEST.INFO")}</P>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={createNewRequest}
        validationSchema={CoacheeSchema}>
        {({ values, handleChange, touched, errors }) => (
          <Form>
            <TextField
              onChange={handleChange("email")}
              placeholder={t("CONTACT.EMAIL")}
              type="email"
              name={t("CONTACT.EMAIL")}
              touched={touched.email}
              error={errors.email}
              value={values.email}
            />
          </Form>
        )}
      </Formik>
    </Container>
  )
}

const Title = styled(H5)`
  margin: 0 0 1.5rem;
`

const CoacheeSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("LOGIN.PASSWORD_REQUIRED")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
})

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  padding: 1rem;
  border-radius: 1rem;
`
