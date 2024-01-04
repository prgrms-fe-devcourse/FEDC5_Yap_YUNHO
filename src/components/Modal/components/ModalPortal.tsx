import React from "react"
import { createPortal } from "react-dom"

interface ModalPortalProps {
  children: React.ReactNode
  isShow: boolean
}

const ModalPortal = ({ children, isShow }: ModalPortalProps) => {
  if (!isShow) {
    return
  }
  const ModalBaseElement = document.querySelector("#modal")
  if (!(ModalBaseElement instanceof HTMLElement)) {
    return
  }
  return createPortal(<>{children}</>, ModalBaseElement)
}

export default ModalPortal
