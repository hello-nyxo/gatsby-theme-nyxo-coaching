import { Router } from "@reach/router"
import React, { FC } from "react"
import Details from "@components/user/pages/Details"
import Login from "@components/user/pages/Login"
import PrivateRoute from "@components/auth/PrivateRoute"
import SignUp from "@components/user/pages/Register"
import Reset from "@components/user/pages/Reset"
import Layout from "@components/Layout/Layout"
import Sleep from "@components/user/pages/Sleep"

const Me: FC = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/me/details" component={Details} />
        <PrivateRoute path="/me/sleep" component={Sleep} />
        <Login path="/me/login" />
        <SignUp path="/me/register" />
        <Reset path="/me/reset" />
      </Router>
    </Layout>
  )
}

export default Me
