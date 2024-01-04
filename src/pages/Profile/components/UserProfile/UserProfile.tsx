import UserFollowInfo from "./UserFollowInfo"
import UserNickname from "./UserNickname"
import UserProfileImage from "./UserProfileImage"
import UserActions from "./UserActions/UserActions"
import * as S from "./UserProfile.Styles"

const UserProfile = () => {
  return (
    <S.UserProfileLayout>
      <UserProfileImage />
      <UserNickname />
      <UserActions />
      <UserFollowInfo />
    </S.UserProfileLayout>
  )
}

export default UserProfile
