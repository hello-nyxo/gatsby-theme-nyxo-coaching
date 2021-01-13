import { setUser } from "@auth/auth"
import { H1 } from "@components/html/Html"
import { Auth } from "aws-amplify"
import { Formik, Form } from "formik"
import { Link } from "gatsby"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import * as Yup from "yup"

type Props = {
  path?: string
}

const Login: FC<Props> = () => {
  const { navigate } = useI18next()
  const { t } = useTranslation()
  const defaultValues = {
    email: "",
    password: "",
  }

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      await Auth.signIn(email, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      navigate("/me/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <OverlayDiv>
        <H1>{t("LOGIN.TITLE")}</H1>
        <Formik
          initialValues={defaultValues}
          onSubmit={login}
          validationSchema={LoginSchema}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <FormContainer>
              <InputContainer>
                <Title>{t("LOGIN.EMAIL_FIELD")}</Title>
                <InputField
                  onChange={handleChange("email")}
                  placeholder="Email"
                  autoComplete="username"
                  name="email"
                  value={values.email}
                />
                <Errors>
                  {touched.email && errors.email && (
                    <Error>{t(errors.email)}</Error>
                  )}
                </Errors>
              </InputContainer>
              <InputContainer>
                <Title>{t("LOGIN.PASSWORD")}</Title>
                <InputField
                  onChange={handleChange("password")}
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  value={values.password}
                />
                <Errors>
                  {touched.password && errors.password && (
                    <Error>{t(errors.password)}</Error>
                  )}
                </Errors>
              </InputContainer>

              <Submit type="submit" onClick={handleSubmit}>
                {t("LOGIN.TITLE")}
                {isSubmitting && <Loader />}
              </Submit>
            </FormContainer>
          )}
        </Formik>
        <RegisterContainer>
          <p>
            Not a member? <Link to="/me/register">Sign up now</Link>.
          </p>
        </RegisterContainer>
      </OverlayDiv>
    </Container>
  )
}

export default Login

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("LOGIN.INVALID_EMAIL")
    .required("LOGIN.REQUIRED_EMAIL"),
  password: Yup.string()
    .required("LOGIN.PASSWORD_REQUIRED")
    .min(6, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
})

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

const OverlayDiv = styled.div`
  width: 600px;
  margin: auto;
  height: 500px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputField = styled.input`
  border-radius: 7px;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;

  &:focus,
  :hover {
    background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
    box-shadow: 0 0 0 4px rgba(76, 132, 234, 0.1);
  }
`
const Submit = styled.button`
  padding: 1rem;
  background-color: var(--radiantBlue);
  color: white;
  border-radius: 7px;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1.4px;
  border: none;
  display: block;
  padding: 1rem 2.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 1rem;
`

const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1rem 1rem;
`

const Title = styled.label`
  display: block;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.FONT_BOLD};
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Errors = styled.div`
  padding: 0.5rem 0rem;
  height: 1rem;
`

const Error = styled.span`
  color: ${({ theme }) => theme.errorColor};
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  font-size: 0.6rem;
`

const RegisterContainer = styled.div`
  margin: 2rem 0rem 0rem;
`

const Loader = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;

  &:after {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.2rem solid rgba(255, 255, 255, 0.2);
  border-right: 0.2rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.2);
  border-left: 0.2rem solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
