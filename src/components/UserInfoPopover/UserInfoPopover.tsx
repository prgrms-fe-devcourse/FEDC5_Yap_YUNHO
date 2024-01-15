import * as S from "./UserInfoPopover.Styles"
import Popover from "../Popover/Popover"
import UserInfoTop from "./Components/UserInfoTop/UserInfoTop"
import UserInfoFollowAction from "./Components/UserInfoFollowAction/UserInfoFollowAction"
import UserInfoAction from "./Components/UserInfoAction/UserInfoAction"
import { User } from "@/types"

interface UserInfoDropDownProps {
  user: User
  children: React.ReactNode
  isPostCard?: boolean
  isLeft?: boolean
  isRight?: boolean
}

const UserInfoPopover = ({
  user,
  isPostCard,
  children,
  isLeft,
  isRight,
}: UserInfoDropDownProps) => {
  const UserInfoComponent = (
    <S.UserInfoBackground>
      <S.UserInfoLayout>
        <UserInfoTop user={user} />
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
      isRight={isRight}
    >
      {children}
    </Popover>
  )
}

export default UserInfoPopover
