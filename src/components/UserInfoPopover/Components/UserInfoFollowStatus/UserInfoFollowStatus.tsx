import { User } from "@/types"
import * as S from "./UserInfoFollowStatus.Styles"

interface UserInfoFollowStatusProps {
  user: User
}

const UserInfoFollowStatus = ({ user }: UserInfoFollowStatusProps) => {
  return <S.UserInfoFollowStatusLayout></S.UserInfoFollowStatusLayout>
}

export default UserInfoFollowStatus
