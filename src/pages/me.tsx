import { Router, Redirect } from "@reach/router"
import React, { FC, useContext } from "react"
import Details from "@components/user/pages/Details"
import Login from "@components/user/pages/Login"
import PrivateRoute from "@components/auth/PrivateRoute"
import SignUp from "@components/user/pages/Register"
import Reset from "@components/user/pages/Reset"
import Layout from "@components/Layout/Layout"
import Sleep from "@components/user/pages/Sleep"
import { I18nextContext } from "gatsby-plugin-react-i18next"
import { PageProps } from "gatsby"

const Me: FC<PageProps> = () => {
  const { language } = useContext(I18nextContext)
  const basepath = language === "en" ? "/me" : `${language}/me`

  return (
    <Layout>
      <Router>
        <PrivateRoute path={`${basepath}/details`} component={Details} />
        <PrivateRoute path="/sleep" component={Sleep} />
        <Login path="/login" />
        <SignUp path="/register" />
        <Reset path="/reset" />
      </Router>
    </Layout>
  )
}

export default Me
