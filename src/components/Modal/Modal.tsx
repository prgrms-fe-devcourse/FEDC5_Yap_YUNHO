import * as S from "./Modal.Styles"
import CloseIcon from "@mui/icons-material/Close"

const Modal = () => {
  return (
    <S.ModalBackground>
      <S.ModalSection>
        <S.ModalTop>
          <CloseIcon />
        </S.ModalTop>
        <S.ModalContent></S.ModalContent>
      </S.ModalSection>
    </S.ModalBackground>
  )
}

export default Modal
