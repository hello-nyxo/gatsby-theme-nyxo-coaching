/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createElement } from "react"
import { setUser } from "@auth/auth"
import Auth from "@aws-amplify/auth"
import { get } from "lodash"
import Modal from "react-modal"
import { ReplaceComponentRenderer } from "./src/gatsby/component-renderer/ReplaceComponentRenderer"

export const onClientEntry = () => {
  Modal.setAppElement(`#___gatsby`)
}

export const onRouteUpdate = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
    })
    .catch(() => {
      window.localStorage.setItem("gatsbyUser", null)
    })
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const isModal = get(location, "state.modal")
  const preventUpdateScroll = get(location, "state.noScroll")

  return !isModal && !preventUpdateScroll
}

export const replaceComponentRenderer = ({ props }, { modalProps }) => {
  return createElement(ReplaceComponentRenderer, { ...props, modalProps })
}
