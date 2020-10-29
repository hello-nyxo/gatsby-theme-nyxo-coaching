/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createElement } from "react"
import { setUser } from "@auth/auth"
import Auth from "@aws-amplify/auth"
import { get } from "lodash"
import "prism-theme-night-owl"
import Modal from "react-modal"
import { ReplaceComponentRenderer } from "./src/gatsby/component-renderer/ReplaceComponentRenderer"

require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

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
