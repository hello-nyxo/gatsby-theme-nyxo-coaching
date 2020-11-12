import React, { FC } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import ModalRoutingContext from "./modal-routing-context"

type Props = {
  to: string
  asModal: true
  state?: any
}

export const ModalRoutingLink: FC<Props> = ({
  to,
  asModal,
  state,
  ...rest
}) => (
  <ModalRoutingContext.Consumer>
    {({ closeTo }) => (
      <Link
        to={to}
        state={{
          ...state,
          modal: asModal,
          noScroll: to === closeTo,
        }}
        {...rest}
      />
    )}
  </ModalRoutingContext.Consumer>
)
