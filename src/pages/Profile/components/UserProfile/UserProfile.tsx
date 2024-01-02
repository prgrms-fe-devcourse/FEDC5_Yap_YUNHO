import UserFollowInfo from "./UserFollowInfo"
import UserNickname from "./UserNickname"
import UserProfileImage from "./UserProfileImage"
import UserActions from "./UserActions/UserActions"
import * as S from "./UserProfile.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useMemo } from "react"

interface UserProfileProps {
  userId?: string
}

const UserProfile = ({ userId }: UserProfileProps) => {
  const { user } = useAuthUserStore()
  const isMyPage = useMemo(() => userId === user._id, [userId, user._id])

  return (
    <S.UserProfileSection>
      <UserProfileImage />
      <UserNickname />
      <UserActions isMyPage={isMyPage} />
      <UserFollowInfo />
    </S.UserProfileSection>
  )
}

export default UserProfile
