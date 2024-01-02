import UserPosts from "./Components/UserPosts/UserPosts"
import UserAction from "./Components/UserProfile/UserAction/UserAction"
import UserFollowInfo from "./Components/UserProfile/UserFollowInfo"
import UserNickname from "./Components/UserProfile/UserNickname"
import UserProfileImage from "./Components/UserProfile/UserProfileImage"
import * as S from "./Styles/UserProfile.styles"

const Profile = () => {
  return (
    <div>
      <S.UserProfileSection>
        <UserProfileImage />
        <UserNickname />
        <UserAction />
        <UserFollowInfo />
      </S.UserProfileSection>
      <UserPosts />
    </div>
  )
}

export default Profile
