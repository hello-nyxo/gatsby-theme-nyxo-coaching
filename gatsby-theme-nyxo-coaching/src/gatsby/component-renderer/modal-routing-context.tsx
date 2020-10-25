import { createContext } from "react"

type Context = {
  modal: boolean
  closeTo: null | string
}

export const defaultValue: Context = {
  modal: false,
  closeTo: null,
}
const ModalRoutingContext = createContext(defaultValue)

export default ModalRoutingContext
