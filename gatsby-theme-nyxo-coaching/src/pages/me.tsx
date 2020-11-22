import PrivateRoute from "@components/auth/PrivateRoute"
import Layout from "@components/Layout/Layout"
import Details from "@components/user/pages/Details"
import { Home } from "@components/user/pages/Home"
import Login from "@components/user/pages/Login"
import SignUp from "@components/user/pages/Register"
import Reset from "@components/user/pages/Reset"
import Sleep from "@components/user/pages/Sleep"
import SideBar from "@components/user/sidebar/SideBar"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import React, { FC } from "react"

const Me: FC<PageProps> = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path={`me/*`} component={Home} />
        <Login path={`me/login`} />
        <SignUp path={`me/register`} />
        <Reset path={`me/reset`} />
      </Router>
    </Layout>
  )
}

export default Me
