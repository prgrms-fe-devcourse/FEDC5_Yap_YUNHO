import * as S from "./ModalConfirm.Styles"
import SmallModal from "../Modal/SmallModal"

interface ModalConfirmProps {
  isShow: boolean
  onClose: (response: boolean) => void
  message: string
  acceptButtonText?: string
  cancelButtonText?: string
}

const ModalConfirm = ({
  isShow,
  message,
  onClose,
  acceptButtonText = "수락",
  cancelButtonText = "취소",
}: ModalConfirmProps) => {
  const handleClickAccept = () => {
    onClose(true)
  }

  const handleClickCancel = () => {
    onClose(false)
  }

  return (
    <SmallModal
      isShow={isShow}
      $height={20}
    >
      <S.ModalConfirmLayout>
        <S.ModalConfirmMessage>{message}</S.ModalConfirmMessage>
        <S.ModalConfirmActions>
          <S.ModalConfirmButton onClick={handleClickCancel}>
            {cancelButtonText}
          </S.ModalConfirmButton>
          <S.ModalConfirmButton onClick={handleClickAccept}>
            {acceptButtonText}
          </S.ModalConfirmButton>
        </S.ModalConfirmActions>
      </S.ModalConfirmLayout>
    </SmallModal>
  )
}

export default ModalConfirm
