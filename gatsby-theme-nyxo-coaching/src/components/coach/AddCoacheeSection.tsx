import { useCreateRequest } from "@hooks/useRequest"
import React, { FC } from "react"
import styled from "styled-components"
import * as Yup from "yup"
import { Formik, Form, su } from "formik"
import { TextField } from "@components/fields/TextField"
import { H5, P } from "@components/html/Html"

export const AddCoacheeSection: FC = () => {
  const [mutate, { isError, error }] = useCreateRequest()

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
      <Title>Valmennuspyynnöt</Title>
      <P>
        Syötä uuden valmettavan sähköpostiosoite. Luodessaan tilin pystyy pystyy
        valmennettava aktivoimaan valmennuksen itsellään
      </P>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={createNewRequest}
        validationSchema={CoacheeSchema}>
        {({ values, handleChange, touched, errors }) => (
          <Form>
            <TextField
              onChange={handleChange("email")}
              placeholder="email"
              type="email"
              name="email"
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
