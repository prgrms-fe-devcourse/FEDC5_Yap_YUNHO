import { MouseEvent } from "react"
import * as S from "./SmallModal.Styles"
import ModalPortal from "./components/ModalPortal"

interface SmallModalProps {
  children: React.ReactNode
  isShow: boolean
  $width?: number
  $height?: number
  onClose?: () => void
}

export const SmallModal = ({
  children,
  isShow,
  $width = 40,
  $height = 40,
  onClose,
}: SmallModalProps) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (!onClose) {
      return
    }
    if (target !== currentTarget) {
      return
    }

    onClose()
  }

  return (
    <ModalPortal isShow={isShow}>
      <S.SmallModalBackground onClick={handleCloseModal}>
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
