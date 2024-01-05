import * as S from "./ModalAlert.Styles"
import SmallModal from "../Modal/SmallModal"
import { MouseEvent } from "react"

interface ModalAlertProps {
  isShow: boolean
  alertMessage: string
  onClose: () => void
}

const ModalAlert = ({ isShow, onClose, alertMessage }: ModalAlertProps) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return
    }

    onClose()
  }
  return (
    <SmallModal
      isShow={isShow}
      $height={20}
      onClose={onClose}
    >
      <S.ModalAlertLayout>
        <S.ModalAlertMessage>{alertMessage}</S.ModalAlertMessage>
        <S.ModalAlertActionContainer>
          <S.ModalAlertCloseButton onClick={handleCloseModal}>
            닫기
          </S.ModalAlertCloseButton>
        </S.ModalAlertActionContainer>
      </S.ModalAlertLayout>
    </SmallModal>
  )
}

export default ModalAlert
