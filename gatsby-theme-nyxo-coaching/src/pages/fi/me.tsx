import Layout from "@components/Layout/Layout"
import { Home } from "@components/user/pages/Home"
import Login from "@components/user/pages/Login"
import SignUp from "@components/user/pages/Register"
import Reset from "@components/user/pages/Reset"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import React, { FC } from "react"

const Me: FC<PageProps> = () => {
  return (
    <Layout>
      <Router>
        <Home path={`fi/me/*`} />
        <Login path={`fi/me/login`} />
        <SignUp path={`fi/me/register`} />
        <Reset path={`fi/me/reset`} />
      </Router>
    </Layout>
  )
}

export default Me
