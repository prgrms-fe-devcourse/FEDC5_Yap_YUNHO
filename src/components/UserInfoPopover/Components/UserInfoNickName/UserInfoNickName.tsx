import { User } from "@/types"
import * as S from "./UserInfoNickName.Styles"

interface UserInfoNickNameProps {
  user: User
}

const UserInfoNickName = ({ user }: UserInfoNickNameProps) => {
  console.log(user)

  return (
    <S.UserInfoNickNameLayout>
      <S.UserInfoActions>
        <S.UserInfoButtons>DM</S.UserInfoButtons>
        <S.UserInfoButtons>언 팔로우</S.UserInfoButtons>
      </S.UserInfoActions>
    </S.UserInfoNickNameLayout>
  )
}

export default UserInfoNickName
