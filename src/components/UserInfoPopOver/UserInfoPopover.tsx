import * as S from "./UserInfoPopover.Styles"
import { ReactNode } from "react"
import useHover from "./hooks/useHover"

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
  const { hoverRef, isHover } = useHover()
  console.log(userId)

  return (
    <S.UserInfoPopoverProvider
      ref={hoverRef}
      $isPostCard={isPostCard}
    >
      <S.UserInfoPopoverLayout $isShow={isHover}>
        {isHover && (
          <>
            <S.UserInfoPopoverContainer>
              <h1>잔액부족</h1>
            </S.UserInfoPopoverContainer>
          </>
        )}
      </S.UserInfoPopoverLayout>
      {children}
    </S.UserInfoPopoverProvider>
  )
}

export default UserInfoPopover
