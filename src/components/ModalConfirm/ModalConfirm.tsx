import * as S from "./ModalConfirm.Styles"
import * as GS from "../Modal/ModalGlobal.Styles"
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
        <GS.ModalBottomActions>
          <GS.ModalButton onClick={handleClickCancel}>
            {cancelButtonText}
          </GS.ModalButton>
          <GS.ModalButton onClick={handleClickAccept}>
            {acceptButtonText}
          </GS.ModalButton>
        </GS.ModalBottomActions>
      </S.ModalConfirmLayout>
    </SmallModal>
  )
}

export default ModalConfirm
