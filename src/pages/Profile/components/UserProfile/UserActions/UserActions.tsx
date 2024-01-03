import UserFollowButton from "./UserFollowButton"
import UserUpdateInfoButton from "./UserUpdateInfoButton"
import UserSendDMButton from "./UserSendDMButton"
import * as S from "./UserActions.Styles"

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
