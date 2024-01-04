import UserFollowInfo from "./UserFollowInfo"
import UserNickname from "./UserNickname"
import UserProfileImage from "./UserProfileImage"
import UserActions from "./UserActions/UserActions"
import * as S from "./UserProfile.Styles"

interface UserProfileProps {
  isMyPage: boolean
}

const UserProfile = ({ isMyPage }: UserProfileProps) => {
  return (
    <S.UserProfileLayout>
      <UserProfileImage />
      <UserNickname />
      <UserActions isMyPage={isMyPage} />
      <UserFollowInfo />
    </S.UserProfileLayout>
  )
}

export default UserProfile
