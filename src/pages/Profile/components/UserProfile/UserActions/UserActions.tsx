import UserFollowButton from "./UserFollowButton"
import UserUpdateInfoButton from "./UserUpdateInfoButton"
import UserSendDMButton from "./UserSendDMButton"
import * as S from "./UserActions.Styles"
import { useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

const UserActions = () => {
  const { id } = useParams()
  const { user } = useAuthUserStore()
  const isMyPage = user._id === id

  return (
    <S.UserActionLayout>
      {isMyPage ? (
        <UserUpdateInfoButton />
      ) : (
        <>
          <UserFollowButton />
          <UserSendDMButton />
        </>
      )}
    </S.UserActionLayout>
  )
}

export default UserActions
