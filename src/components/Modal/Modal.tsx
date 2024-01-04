import * as S from "./Modal.Styles"
import CloseIcon from "@mui/icons-material/Close"
import ModalLayout from "./components/ModalLayout"

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return (
    <ModalLayout>
      <S.ModalBackground>
        <S.ModalSection>
          <S.ModalTop>
            <CloseIcon />
          </S.ModalTop>
          <S.ModalContent>{children}</S.ModalContent>
        </S.ModalSection>
      </S.ModalBackground>
    </ModalLayout>
  )
}

export default Modal
