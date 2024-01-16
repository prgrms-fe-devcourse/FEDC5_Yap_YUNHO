import * as S from "./UserActions.Styles"
import { useNavigate, useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import UserActionButton from "./UserActionButton"
import UserFollowActionButton from "./UserFollowActionButton"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import { NOT_LOGIN_MODAL_MESSAGE } from "@/constants/modalMessage"
import useModal from "@/components/Modal/hooks/useModal"

const UserActions = () => {
  const navigate = useNavigate()
  const { isShowModal, showModal, closeModal } = useModal()

  const { userId } = useParams()
  const { user: authUser, isLoggedIn } = useAuthUserStore()
  const isMyPage = authUser._id === userId

  const handleClickButton = (isDMPage?: boolean) => {
    if (!isLoggedIn) {
      showModal()
      return
    }

    if (isDMPage) {
      navigate(`/directmessage/${userId}`)
    }
  }

  const handleAlertCloseButton = (isAccepted: boolean) => {
    closeModal()
    if (isAccepted) {
      navigate("/login")
    }
  }

  if (isMyPage) {
    return (
      <S.UserActionLayout>
        <UserActionButton
          text="회원 정보 수정"
          $width={11}
          onClick={() => {
            navigate(`/useredit/${userId}`)
          }}
        />
      </S.UserActionLayout>
    )
  }

  return (
    <S.UserActionLayout>
      <UserFollowActionButton onClick={handleClickButton} />
      <UserActionButton
        text="DM 보내기"
        $width={9}
        onClick={() => handleClickButton(true)}
      />
      <ConfirmModal
        isShow={isShowModal}
        onClose={handleAlertCloseButton}
        message={NOT_LOGIN_MODAL_MESSAGE}
        acceptButtonText={"확인"}
      />
    </S.UserActionLayout>
  )
}

export default UserActions
