import UserFollowInfo from "./UserFollowInfo"
import UserNickname from "./UserNickname"
import UserProfileImage from "./UserProfileImage"
import UserActions from "./UserActions/UserActions"
import * as S from "./UserProfile.Styles"

const UserProfile = () => {
  return (
    <S.UserProfileSection>
      <UserProfileImage />
      <UserNickname />
      <UserActions />
      <UserFollowInfo />
    </S.UserProfileSection>
  )
}

export default UserProfile
