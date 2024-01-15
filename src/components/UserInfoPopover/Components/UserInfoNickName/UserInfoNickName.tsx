import { User } from "@/types"
import * as S from "./UserInfoNickName.Styles"

interface UserInfoNickNameProps {
  user: User
}

const UserInfoNickName = ({ user }: UserInfoNickNameProps) => {
  return <S.UserInfoNickNameLayout></S.UserInfoNickNameLayout>
}

export default UserInfoNickName
