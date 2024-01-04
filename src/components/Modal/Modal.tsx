import * as S from "./Modal.Styles"
import CloseIcon from "@mui/icons-material/Close"
import ModalPortal from "./components/ModalPortal"
import React, { MouseEvent } from "react"

interface ModalProps {
  children: React.ReactNode
  isShow: boolean
  closeModal: () => void
}

const Modal = ({ children, isShow, closeModal }: ModalProps) => {
  const handleOffModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return
    }

    closeModal()
  }

  return (
    <ModalPortal isShow={isShow}>
      <S.ModalBackground onClick={handleOffModal}>
        <S.ModalSection>
          <S.ModalTop>
            <CloseIcon onClick={handleOffModal} />
          </S.ModalTop>
          <S.ModalContent>{children}</S.ModalContent>
        </S.ModalSection>
      </S.ModalBackground>
    </ModalPortal>
  )
}

export default Modal
