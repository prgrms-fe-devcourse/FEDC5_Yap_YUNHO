import * as S from "./ConfirmModal.Styles"
import * as GS from "../../ModalGlobal.Styles"
import CustomModal from "../CustomModal/CustomModal"

interface ConfirmModalProps {
  isShow: boolean
  onClose: (response: boolean) => void
  message: string
  acceptButtonText?: string
  cancelButtonText?: string
}

const ConfirmModal = ({
  isShow,
  message,
  onClose,
  acceptButtonText = "확인",
  cancelButtonText = "취소",
}: ConfirmModalProps) => {
  const handleClickAccept = () => {
    onClose(true)
  }

  const handleClickCancel = () => {
    onClose(false)
  }

  return (
    <CustomModal
      isShow={isShow}
      $height={20}
    >
      <S.ConfirmModalLayout>
        <S.ConfirmModalMessage>{message}</S.ConfirmModalMessage>
        <GS.ModalBottomActions>
          <GS.ModalButton onClick={handleClickCancel}>
            {cancelButtonText}
          </GS.ModalButton>
          <GS.ModalButton onClick={handleClickAccept}>
            {acceptButtonText}
          </GS.ModalButton>
        </GS.ModalBottomActions>
      </S.ConfirmModalLayout>
    </CustomModal>
  )
}

export default ConfirmModal
