import * as S from "./UserActions.Styles"
import { useNavigate, useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import UserActionButton from "./UserActionButton"
import UserFollowActionButton from "./UserFollowActionButton"

const UserActions = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { myId } = useAuthUserStore()
  const isMyPage = myId === id

  return (
    <S.UserActionLayout>
      {isMyPage ? (
        <UserActionButton
          text="회원 정보 수정"
          $width={11}
          onClick={() => {
            navigate(`/useredit/${id}`)
          }}
        />
      ) : (
        <>
          <UserFollowActionButton />
          <UserActionButton
            text="DM 보내기"
            $width={9}
            onClick={() => {
              navigate(`/directmessage/${id}`)
            }}
          />
        </>
      )}
    </S.UserActionLayout>
  )
}

export default UserActions
