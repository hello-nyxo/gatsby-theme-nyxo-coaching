import { isLoggedIn } from "@auth/auth"
import { ContentContainer } from "@components/Primitives"
import { navigate } from "@reach/router"
import colors from "@styles/colors"
import { Auth } from "aws-amplify"
import { Link } from "gatsby"
import React, { FC, useState } from "react"
import styled from "styled-components"

type Props = {
  path: string
}

const Register: FC<Props> = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const signUp = async () => {
    try {
      await Auth.signUp({
        username: email,
        password: password,
      })
    } catch (err) {
      console.log("error signing up...", err)
    }
  }

  if (isLoggedIn()) {
    navigate("/me/details")
    return null
  }
  return (
    <div>
      <OverlayDiv>
        <NewContentContainer>
          <h1>Register</h1>

          <InputField
            type="email"
            onChange={handleEmail}
            placeholder="Email"
            name="email"
            value={email}
          />
          <InputField
            onChange={handlePassword}
            placeholder="Password"
            name="password"
            value={password}
            type="password"
          />
          <div>
            <Submit onClick={signUp} type="submit">
              Register
            </Submit>
          </div>
          <br></br>

          <p>
            Already have an account? <Link to="/me/login">Login</Link>.
          </p>
        </NewContentContainer>
      </OverlayDiv>
    </div>
  )
}

export default Register

const OverlayDiv = styled.div`
  width: 600px;
  margin: auto;
  height: 500px;
  position: relative;
  margin-top: -250px;
  background-color: #fff;
  box-shadow: var(--shadow);
  z-index: 2;

  @media screen and (max-width: 720px) {
    width: 90%;
    box-shadow: var(--shadowFull);
  }
`
const InputField = styled.input`
  border-radius: 3px;
  border: 2px solid var(--bg);
  width: 60%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 1rem;

  &:focus {
    border: 2px solid var(--radiantBlue);
  }
  @media screen and (max-width: 720px) {
    width: 80%;
  }
`
const Submit = styled.button`
  padding: 1rem;
  background-color: var(--radiantBlue);
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  margin: 20px 0;
`
const CheckEmail = styled.h4`
  margin: 50px 0;
`
const ErrorMsg = styled.p`
  color: ${colors.morningAccent};
  line-height: 24px;
  font-weight: 700;
`
const NewContentContainer = styled(ContentContainer)`
  margin: auto;
  text-align: center;
  padding-top: 50px;
`
