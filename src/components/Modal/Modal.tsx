import * as S from "./Modal.Styles"
import CloseIcon from "@mui/icons-material/Close"
import ModalPortal from "./components/ModalPortal"
import { MouseEvent } from "react"

interface ModalProps {
  children: React.ReactNode
  isShow: boolean
  onClose: () => void
  clickAwayEnable: boolean
}

const Modal = ({ children, isShow, onClose, clickAwayEnable }: ModalProps) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return
    }

    onClose()
  }

  return (
    <ModalPortal isShow={isShow}>
      <S.ModalBackground
        onClick={(e) => {
          clickAwayEnable && handleCloseModal(e)
        }}
      >
        <S.ModalSection>
          <S.ModalTop>
            <CloseIcon onClick={handleCloseModal} />
          </S.ModalTop>
          <S.ModalContent>{children}</S.ModalContent>
        </S.ModalSection>
      </S.ModalBackground>
    </ModalPortal>
  )
}

export default Modal
