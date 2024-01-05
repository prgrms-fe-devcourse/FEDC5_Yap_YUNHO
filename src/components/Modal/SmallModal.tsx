import * as S from "./SmallModal.Styles"
import ModalPortal from "./components/ModalPortal"

interface SmallModalProps {
  children: React.ReactNode
  isShow: boolean
}

export const SmallModal = ({ children, isShow }: SmallModalProps) => {
  return (
    <ModalPortal isShow={isShow}>
      <S.SmallModalBackground>
        <S.SmallModalSection>
          <S.SmallModalContent>{children}</S.SmallModalContent>
        </S.SmallModalSection>
      </S.SmallModalBackground>
    </ModalPortal>
  )
}

export default SmallModal
