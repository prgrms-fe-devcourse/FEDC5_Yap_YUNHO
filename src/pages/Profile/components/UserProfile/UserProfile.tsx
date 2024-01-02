import * as S from "@/pages/Profile/styles/UserProfile.styles"
import UserFollowInfo from "./UserFollowInfo"
import UserNickname from "./UserNickname"
import UserProfileImage from "./UserProfileImage"
import UserActions from "./UserAction/UserActions"

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
