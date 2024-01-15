import { User } from "@/types"
import * as S from "./UserInfoNickName.Styles"

interface UserInfoNickNameProps {
  user: User
}

const UserInfoNickName = ({ user }: UserInfoNickNameProps) => {
  return (
    <S.UserInfoNickNameLayout>
      <S.UserInfoNickNameText>{user.fullName}</S.UserInfoNickNameText>
    </S.UserInfoNickNameLayout>
  )
}

export default UserInfoNickName
