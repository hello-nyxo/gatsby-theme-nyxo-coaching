import React, { FC } from "react"
import { useBoop } from "@hooks/use-boop"
import { animated } from "react-spring"

export const Wiggle: FC = ({ children }) => {
  const [style, trigger] = useBoop({ y: 2 })

  return (
    <animated.div style={style} onMouseEnter={trigger}>
      {children}
    </animated.div>
  )
}
