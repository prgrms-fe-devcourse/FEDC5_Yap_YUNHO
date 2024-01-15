import * as S from "./UserActions.Styles"
import { useNavigate, useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import UserActionButton from "./UserActionButton"
import UserFollowActionButton from "./UserFollowActionButton"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import { NOT_LOGIN_MODAL_MESSAGE } from "@/constants/modalMessage"
import useModal from "@/components/Modal/hooks/useModal"

interface UserActionsProps {
  onFollowButtonClick: () => void
  onUnFollowButtonClick: () => void
}

const UserActions = ({
  onFollowButtonClick,
  onUnFollowButtonClick,
}: UserActionsProps) => {
  const navigate = useNavigate()
  const { isShowModal, showModal, closeModal } = useModal()

  const { id } = useParams()
  const { myId, isLoggedIn } = useAuthUserStore()
  const isMyPage = myId === id

  const handleClickButton = (isDMPage?: boolean) => {
    if (!isLoggedIn) {
      showModal()
      return
    }
    console.log(isDMPage)

    if (isDMPage) {
      navigate(`/directmessage/${id}`)
    }
  }

  const handleAlertCloseButton = (isAccepted: boolean) => {
    closeModal()
    if (isAccepted) {
      navigate("/login")
    }
  }

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
          <UserFollowActionButton
            onFollowButtonClick={onFollowButtonClick}
            onUnFollowButtonClick={onUnFollowButtonClick}
            onClick={handleClickButton}
          />
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
        </>
      )}
    </S.UserActionLayout>
  )
}

export default UserActions
