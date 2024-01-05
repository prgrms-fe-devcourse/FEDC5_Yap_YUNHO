import * as GS from "./Modal.Styles"
import * as S from "./SmallModal.Styles"
import ModalPortal from "./components/ModalPortal"

interface SmallModalProps {
  children: React.ReactNode
  isShow: boolean
}

export const SmallModal = ({ children, isShow }: SmallModalProps) => {
  return (
    <ModalPortal isShow={isShow}>
      <GS.ModalBackground>
        <S.SmallModalSection>
          <S.SmallModalContent>{children}</S.SmallModalContent>
        </S.SmallModalSection>
      </GS.ModalBackground>
    </ModalPortal>
  )
}

export default SmallModal
