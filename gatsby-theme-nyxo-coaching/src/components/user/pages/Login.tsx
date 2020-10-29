import { isLoggedIn, setUser } from "@auth/auth"
import { H1 } from "@components/html/Html"
import { navigate } from "@reach/router"
import { Auth } from "aws-amplify"
import { Formik } from "formik"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import * as Yup from "yup"

type Props = {
  path?: string
}

const Login: FC<Props> = () => {
  const { t } = useTranslation()
  const defaultValues = {
    email: "",
    password: "",
  }

  const login = async ({ email, password }) => {
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
          {({ handleChange, submitForm, values, errors, touched }) => (
            <>
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
              <Submit type="submit" onClick={submitForm} value="Login" />
            </>
          )}
        </Formik>
        <p>
          Not a member? <Link to="/me/register">Sign up now</Link>.
        </p>
      </OverlayDiv>
    </Container>
  )
}
export default Login

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
const Submit = styled.input`
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
`

const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const Title = styled.label`
  display: block;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.FONT_BOLD};
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("LOGIN.INVALID_EMAIL")
    .required("LOGIN.REQUIRED_EMAIL"),
  password: Yup.string()
    .required("LOGIN.PASSWORD_REQUIRED")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
})

const Errors = styled.div`
  padding: 0.5rem 0rem;
`

const Error = styled.span`
  color: ${({ theme }) => theme.errorColor};
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  font-size: 0.6rem;
`
