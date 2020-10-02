import React, { FC } from "react"
import { navigate } from "@reach/router"
import { isLoggedIn } from "@auth/auth"

interface PrivateRouteProps {
  component: any
  path: string
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!isLoggedIn()) {
    navigate(`/me/login`)
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute
