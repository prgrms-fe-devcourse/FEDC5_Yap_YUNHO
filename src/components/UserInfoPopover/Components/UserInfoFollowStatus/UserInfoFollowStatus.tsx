import { User } from "@/types"
import * as S from "./UserInfoFollowStatus.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"

interface UserInfoFollowStatusProps {
  user: User
}

const UserInfoFollowStatus = ({ user }: UserInfoFollowStatusProps) => {
  const { followers, following } = user

  const convertedFollowingCount = convertFollowCount(following.length)
  const convertedFollowerCount = convertFollowCount(followers.length)
  return (
    <S.UserInfoFollowStatusLayout>
      <S.UserInfoFollowStatus>{`팔로잉 ${convertedFollowingCount} 명`}</S.UserInfoFollowStatus>
      <S.UserInfoFollowStatus>{`팔로워 ${convertedFollowerCount} 명`}</S.UserInfoFollowStatus>
    </S.UserInfoFollowStatusLayout>
  )
}

export default UserInfoFollowStatus
