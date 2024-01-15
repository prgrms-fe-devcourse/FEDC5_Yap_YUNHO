import { User } from "@/types"
import * as S from "./UserInfoProfile.Styles"

interface UserInfoProfileProps {
  user: User
}

const UserInfoProfile = ({ user }: UserInfoProfileProps) => {
  return (
    <S.UserInfoProfileLayout>
      <S.UserInfoProfile $url={user.image} />
      <S.UserInfoNickNameText>{user.fullName}</S.UserInfoNickNameText>
    </S.UserInfoProfileLayout>
  )
}

export default UserInfoProfile
