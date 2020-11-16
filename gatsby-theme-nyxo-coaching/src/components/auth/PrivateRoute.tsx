import React, { FC, ReactElement } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { isLoggedIn } from "@auth/auth"

interface PrivateRouteProps {
  component: JSX.Element | null | ReactElement
  path: string
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { navigate } = useI18next()

  if (!isLoggedIn()) {
    if (typeof window !== "undefined") {
      navigate(`/me/login`)
    }

    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute
