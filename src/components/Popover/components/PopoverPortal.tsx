import { useEffect, useRef, useState } from "react"
import * as S from "./PopoverPortal.Styles"
import { createPortal } from "react-dom"

interface ModalPortalProps {
  children: React.ReactNode
  isShow: boolean
}

const PopoverPortal = ({ children, isShow }: ModalPortalProps) => {
  const [isPopoverHover, setIsPopoverHover] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setIsPopoverHover(true)
  }

  const handleMouseLeave = () => {
    setIsPopoverHover(false)
  }

  useEffect(() => {
    const { current } = popoverRef

    if (!current) {
      return
    }

    current.addEventListener("mouseenter", handleMouseEnter)
    current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      current.removeEventListener("mouseenter", handleMouseEnter)
      current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isShow])

  if (!isShow && !isPopoverHover) {
    return
  }

  const PopoverBaseElement = document.querySelector("#popover")
  if (!(PopoverBaseElement instanceof HTMLElement)) {
    return
  }

  return createPortal(
    <S.PopOverLayout ref={popoverRef}>{children}</S.PopOverLayout>,
    PopoverBaseElement,
  )
}

export default PopoverPortal
