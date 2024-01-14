import UserInfoPopover from "@/components/UserInfo/UserInfoPopover"
import * as S from "./UserProfile.Styles"
import UserActions from "./components/UserActions/UserActions"
import UserFollowInfo from "./components/UserFollowInfo/UserFollowInfo"
import UserNickname from "./components/UserNickname"
import UserProfileImage from "./components/UserProfileImage"

const UserProfile = () => {
  return (
    <S.UserProfileLayout>
      <UserInfoPopover userId="none">
        <UserProfileImage />
      </UserInfoPopover>
      <UserNickname />
      <UserActions />
      <UserFollowInfo />
    </S.UserProfileLayout>
  )
}

export default UserProfile
