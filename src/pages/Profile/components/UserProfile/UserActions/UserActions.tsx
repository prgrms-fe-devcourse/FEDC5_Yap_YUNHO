import * as S from "./UserActions.Styles"
import { useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import UserActionButton from "./UserUpdateInfoButton"

const UserActions = () => {
  const { id } = useParams()
  const { user } = useAuthUserStore()
  const isMyPage = user._id === id

  return (
    <S.UserActionLayout>
      {isMyPage ? (
        <UserActionButton
          text="회원 정보 수정"
          $width={11}
        />
      ) : (
        <>
          <UserActionButton
            text="팔로우"
            $width={9}
          />
          <UserActionButton
            text="DM 보내기"
            $width={9}
          />
        </>
      )}
    </S.UserActionLayout>
  )
}

export default UserActions
