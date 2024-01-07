import * as S from "./Modal.Styles"
import CloseIcon from "@mui/icons-material/Close"
import ModalPortal from "./components/ModalPortal"
import { MouseEvent } from "react"

interface ModalProps {
  children: React.ReactNode
  isShow: boolean
  onClose: () => void
  useClickAway: boolean
}

const Modal = ({ children, isShow, onClose, useClickAway }: ModalProps) => {
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
          useClickAway && handleCloseModal(e)
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
