import * as S from "./Popover.Styles"
import { ReactNode, useEffect, useRef, useState } from "react"
import useHover from "./hooks/useHover"

import PopoverPortal from "./components/PopoverPortal"

interface PopoverProps {
  children: ReactNode
  isPostCard?: boolean
  isLeft?: boolean
  innerComponent: React.ReactNode
}

const Popover = ({
  children,
  isPostCard,
  innerComponent,
  isLeft,
}: PopoverProps) => {
  const { hoverRef, isHover, refPosition } = useHover()
  const innerComponentRef = useRef<HTMLDivElement>(null)
  const [layoutPosition, setLayoutPosition] = useState({
    top: 0,

    left: 0,
  })

  useEffect(() => {
    const { current } = innerComponentRef
    if (!current) {
      return
    }

    const innerComponentPosition = current.getBoundingClientRect()

    if (isLeft) {
      const topRange = refPosition.top
      const leftRage = refPosition.left - innerComponentPosition.width

      setLayoutPosition(() => ({
        top: topRange - 10,
        left: leftRage,
      }))

      return
    }

    const topRange = refPosition.top + refPosition.height
    const leftRange =
      refPosition.left +
      refPosition.width / 2 -
      innerComponentPosition.width / 2

    setLayoutPosition(() => ({
      top: topRange,
      left: leftRange,
    }))
  }, [isLeft, refPosition])

  return (
    <S.PopoverProvider
      ref={hoverRef}
      $isPostCard={isPostCard}
    >
      <PopoverPortal isShow={isHover}>
        <S.PopoverInnerLayout
          ref={innerComponentRef}
          $top={layoutPosition.top}
          $left={layoutPosition.left}
        >
          {innerComponent}
        </S.PopoverInnerLayout>
      </PopoverPortal>
      {children}
    </S.PopoverProvider>
  )
}

export default Popover
