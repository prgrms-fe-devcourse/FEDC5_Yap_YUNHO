import * as S from "./UserInfoPopover.Styles"
import { ReactNode } from "react"
import useHover from "./hooks/useHover"

import PopoverPortal from "./components/PopoverPortal"

interface UserInfoDropDownProps {
  userId: string
  children: ReactNode
  isPostCard?: boolean
}

const UserInfoPopover = ({
  children,
  userId,
  isPostCard,
}: UserInfoDropDownProps) => {
  const { hoverRef, isHover, refPosition } = useHover()
  console.log(userId)

  const topRange = refPosition.top + refPosition.height
  const leftRange = refPosition.left + refPosition.width / 2 - 100

  return (
    <S.UserInfoPopoverProvider
      ref={hoverRef}
      $isPostCard={isPostCard}
    >
      <PopoverPortal isShow={isHover}>
        <S.UserInfoPopoverLayout
          $top={topRange}
          $left={leftRange}
        >
          <button onClick={() => console.log("Test")}>잔액 부족</button>
        </S.UserInfoPopoverLayout>
      </PopoverPortal>
      {children}
    </S.UserInfoPopoverProvider>
  )
}

export default UserInfoPopover
