import * as S from "@/pages/Profile/styles/UserProfile.styles"
import FollowButton from "./FollowButton"
import SendDirectMessageButton from "./SendDirectMessageButton"
import UpdateUserInfoButton from "./UpdateUserInfoButton"

const UserAction = () => {
  return (
    <S.UserActionSection>
      <FollowButton />
      <SendDirectMessageButton />
      <UpdateUserInfoButton />
    </S.UserActionSection>
  )
}

export default UserAction
