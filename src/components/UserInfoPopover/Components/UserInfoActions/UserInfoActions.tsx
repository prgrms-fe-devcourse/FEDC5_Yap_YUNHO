import { User } from "@/types"
import * as S from "./UserInfoActions.Styles"

interface UserInfoActionsProps {
  user: User
}

const UserInfoActions = ({ user }: UserInfoActionsProps) => {
  console.log(user)

  return (
    <S.UserInfoActionsLayout>
      <S.UserInfoButtons>DM</S.UserInfoButtons>
      <S.UserInfoButtons>언 팔로우</S.UserInfoButtons>
    </S.UserInfoActionsLayout>
  )
}

export default UserInfoActions
