import { User } from "@/types"
import * as S from "./UserInfoFollowStatus.Styles"
import { getConvertedCount } from "@/util/getConvertedCount"

interface UserInfoFollowStatusProps {
  user: User
}

const UserInfoFollowStatus = ({ user }: UserInfoFollowStatusProps) => {
  const { followers, following } = user

  const convertedFollowingCount = getConvertedCount(following.length)
  const convertedFollowerCount = getConvertedCount(followers.length)
  return (
    <S.UserInfoFollowStatusLayout>
      <S.UserInfoFollowStatus>{`팔로잉 ${convertedFollowingCount} 명`}</S.UserInfoFollowStatus>
      <S.UserInfoFollowStatus>{`팔로워 ${convertedFollowerCount} 명`}</S.UserInfoFollowStatus>
    </S.UserInfoFollowStatusLayout>
  )
}

export default UserInfoFollowStatus
