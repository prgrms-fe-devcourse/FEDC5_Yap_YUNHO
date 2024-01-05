import * as S from "./SmallModal.Styles"
import ModalPortal from "./components/ModalPortal"

interface SmallModalProps {
  children: React.ReactNode
  isShow: boolean
  $width?: number
  $height?: number
}

export const SmallModal = ({
  children,
  isShow,
  $width = 40,
  $height = 40,
}: SmallModalProps) => {
  return (
    <ModalPortal isShow={isShow}>
      <S.SmallModalBackground>
        <S.SmallModalSection
          $height={$height}
          $width={$width}
        >
          <S.SmallModalContent
            $height={$height}
            $width={$width}
          >
            {children}
          </S.SmallModalContent>
        </S.SmallModalSection>
      </S.SmallModalBackground>
    </ModalPortal>
  )
}

export default SmallModal
