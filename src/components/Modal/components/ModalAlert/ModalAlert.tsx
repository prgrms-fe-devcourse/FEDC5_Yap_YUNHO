import * as S from "./ModalAlert.Styles"
import * as GS from "../../ModalGlobal.Styles"
import CustomModal from "../CustomModal/CustomModal"
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
    <CustomModal
      isShow={isShow}
      $height={20}
      onClose={onClose}
    >
      <S.ModalAlertLayout>
        <S.ModalAlertMessage>{alertMessage}</S.ModalAlertMessage>
        <GS.ModalBottomActions>
          <GS.ModalButton onClick={handleCloseModal}>닫기</GS.ModalButton>
        </GS.ModalBottomActions>
      </S.ModalAlertLayout>
    </CustomModal>
  )
}

export default ModalAlert
