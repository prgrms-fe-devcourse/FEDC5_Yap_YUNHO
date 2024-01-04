import * as S from "./Modal.Styles"
import CloseIcon from "@mui/icons-material/Close"
import ModalPortal from "./components/ModalPortal"
import React from "react"

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalSection>
          <S.ModalTop>
            <CloseIcon />
          </S.ModalTop>
          <S.ModalContent>{children}</S.ModalContent>
        </S.ModalSection>
      </S.ModalBackground>
    </ModalPortal>
  )
}

export default Modal
