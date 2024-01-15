import { User } from "@/types"
import * as S from "./UserInfoActions.Styles"
import { useNavigate } from "react-router-dom"

interface UserInfoActionsProps {
  user: User
}

const UserInfoActions = ({ user }: UserInfoActionsProps) => {
  const navigate = useNavigate()

  return (
    <S.UserInfoActionsLayout>
      <S.UserInfoButtons onClick={() => navigate(`/directmessage/${user._id}`)}>
        DM
      </S.UserInfoButtons>
      <S.UserInfoButtons>언 팔로우</S.UserInfoButtons>
    </S.UserInfoActionsLayout>
  )
}

export default UserInfoActions
