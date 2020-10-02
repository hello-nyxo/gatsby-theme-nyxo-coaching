import Auth from "@aws-amplify/auth"
import Amplify from "aws-amplify"
import "prism-theme-night-owl"
import { setUser } from "@auth/auth"

const config = require("./src/aws-exports").default
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

export const onClientEntry = () => {
  Amplify.configure(config)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
  }
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
    .catch((err) => {
      window.localStorage.setItem("gatsbyUser", null)
    })
}
