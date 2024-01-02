import * as S from "@/pages/Profile/styles/UserProfile.styles"
import UserFollowButton from "./UserFollowButton"
import UserUpdateInfoButton from "./UserUpdateInfoButton"
import UserSendDMButton from "./UserSendDMButton"

const UserActions = () => {
  return (
    <S.UserActionSection>
      <UserFollowButton />
      <UserSendDMButton />
      <UserUpdateInfoButton />
    </S.UserActionSection>
  )
}

export default UserActions
