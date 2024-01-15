import * as S from "./UserInfoPopover.Styles"
import Popover from "../Popover/Popover"
import UserInfoProfile from "./Components/UserInfoProfile/UserInfoProfile"
import UserInfoFollowStatus from "./Components/UserInfoFollowStatus/UserInfoFollowStatus"
import UserInfoActions from "./Components/UserInfoActions/UserInfoActions"
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
        <UserInfoProfile user={user} />
        <UserInfoActions author={user} />
        <UserInfoFollowStatus user={user} />
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
