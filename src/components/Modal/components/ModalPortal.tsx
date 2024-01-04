import React from "react"
import { createPortal } from "react-dom"

interface ModalPortalProps {
  children: React.ReactNode
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const ModalBaseElement = document.querySelector("#modal")
  if (!(ModalBaseElement instanceof HTMLElement)) {
    return
  }
  return createPortal(<>{children}</>, ModalBaseElement)
}

export default ModalPortal
