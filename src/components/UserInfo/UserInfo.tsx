import * as S from "./UserInfo.Styles"
import { ReactNode } from "react"
import useHover from "./hooks/useHover"

interface UserInfoDropDownProps {
  userId: string
  children: ReactNode
  isPostCard?: boolean
}

const UserInfoDropDown = ({
  children,
  userId,
  isPostCard,
}: UserInfoDropDownProps) => {
  const { hoverRef, isHover } = useHover()
  console.log(userId)

  return (
    <S.UserInfoProvider
      ref={hoverRef}
      $isPostCard={isPostCard}
    >
      <S.UserInfoLayout style={{ display: `${isHover ? "block" : "none"}` }}>
        {isHover && (
          <>
            <S.UserInfoInteriorArrow />
            <S.UserInfoContainer>
              <h1>잔액부족</h1>
            </S.UserInfoContainer>
          </>
        )}
      </S.UserInfoLayout>
      {children}
    </S.UserInfoProvider>
  )
}

export default UserInfoDropDown
