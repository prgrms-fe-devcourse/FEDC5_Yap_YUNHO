import { User } from "@/types"
import * as S from "./UserInfoActions.Styles"
import { useNavigate } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

interface UserInfoActionsProps {
  user: User
}

const UserInfoActions = ({ user }: UserInfoActionsProps) => {
  const { user: authUser, isLoggedIn } = useAuthUserStore()
  const navigate = useNavigate()

  const isMyInformation = authUser._id === user._id

  return (
    <S.UserInfoActionsLayout>
      {isLoggedIn && !isMyInformation && (
        <>
          <S.UserInfoButtons
            onClick={() => navigate(`/directmessage/${user._id}`)}
          >
            DM
          </S.UserInfoButtons>
          <S.UserInfoButtons>언 팔로우</S.UserInfoButtons>
        </>
      )}
    </S.UserInfoActionsLayout>
  )
}

export default UserInfoActions
