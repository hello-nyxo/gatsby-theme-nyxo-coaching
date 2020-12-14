import { useEffect } from "react"

let passiveListenerSupported: boolean

// FROM https://github.com/carbon-design-system/gatsby-theme-carbon/blob/2a87a4bf34dcb6068e258c0635251c8c838d308f/packages/gatsby-theme-carbon/src/util/hooks/useOnClickOutside.js#L18

try {
  const opts = Object.defineProperty({}, "passive", {
    // eslint-disable-next-line getter-return
    get() {
      passiveListenerSupported = true
    },
  })
  window.addEventListener("testPassive", null, opts)
  window.removeEventListener("testPassive", null, opts)
} catch (e) {
  passiveListenerSupported = false
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener(
      "mousedown",
      listener,
      passiveListenerSupported ? { passive: true } : false
    )
    document.addEventListener(
      "touchstart",
      listener,
      passiveListenerSupported ? { passive: true } : false
    )

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
