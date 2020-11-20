import React, { FC, ReactElement } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { isLoggedIn } from "@auth/auth"
import { RouteComponentProps } from "@reach/router"
import Login from "@components/user/pages/Login"

interface PrivateRouteProps {
  component: JSX.Element | null | ReactElement
  path: string
  as: any
}

const PrivateRoute: FC<RouteComponentProps> = ({
  component: Component,
  ...rest
}) => {
  return isLoggedIn() ? <Component {...rest} /> : <Login />
}

export default PrivateRoute
