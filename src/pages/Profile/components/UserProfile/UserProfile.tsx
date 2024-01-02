import * as S from "../../styles/UserProfile.styles"
import UserAction from "./UserAction/UserAction"
import UserFollowInfo from "./UserFollowInfo"
import UserNickname from "./UserNickname"
import UserProfileImage from "./UserProfileImage"

const UserProfile = () => {
  return (
    <S.UserProfileSection>
      <UserProfileImage />
      <UserNickname />
      <UserAction />
      <UserFollowInfo />
    </S.UserProfileSection>
  )
}

export default UserProfile
