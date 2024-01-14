import * as S from "./UserInfoPopover.Styles"
import Popover from "../Popover/Popover"
import UserInfoTop from "./Components/UserInfoTop/UserInfoTop"
import UserInfoFollowAction from "./Components/UserInfoFollowAction/UserInfoFollowAction"
import UserInfoAction from "./Components/UserInfoAction/UserInfoAction"

interface UserInfoDropDownProps {
  userId: string
  children: React.ReactNode
  isPostCard?: boolean
  isLeft?: boolean
}

const UserInfoPopover = ({
  userId,
  isPostCard,
  children,
  isLeft,
}: UserInfoDropDownProps) => {
  console.log(userId)

  const UserInfoComponent = (
    <S.UserInfoBackground>
      <S.UserInfoLayout>
        <UserInfoTop />
        <UserInfoFollowAction />
        <UserInfoAction />
      </S.UserInfoLayout>
    </S.UserInfoBackground>
  )

  return (
    <Popover
      innerComponent={UserInfoComponent}
      isPostCard={isPostCard}
      isLeft={isLeft}
    >
      {children}
    </Popover>
  )
}

export default UserInfoPopover
