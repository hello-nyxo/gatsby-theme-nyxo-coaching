import React, { FC } from "react"
import { isLoggedIn } from "@auth/auth"
import { RouteComponentProps } from "@reach/router"
import Login from "@components/user/pages/Login"

interface PrivateRouteProps extends RouteComponentProps {
  component: FC
  path: string
  as?: unknown
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  console.log(isLoggedIn())
  return isLoggedIn() ? <Component {...rest} /> : <Login />
}

export default PrivateRoute
