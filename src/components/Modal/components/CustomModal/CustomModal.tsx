import { MouseEvent } from "react"
import * as S from "./CustomModal.Styles"
import ModalPortal from "../ModalPortal"

interface CustomModalProps {
  children: React.ReactNode
  isShow: boolean
  $width?: number
  $height?: number
  onClickAway?: () => void
}

export const CustomModal = ({
  children,
  isShow,
  $width = 40,
  $height = 40,
  onClickAway,
}: CustomModalProps) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (!onClickAway) {
      return
    }
    if (target !== currentTarget) {
      return
    }

    onClickAway()
  }

  return (
    <ModalPortal isShow={isShow}>
      <S.CustomModalBackground onClick={handleCloseModal}>
        <S.CustomModalSection
          $height={$height}
          $width={$width}
        >
          <S.CustomModalContent
            $height={$height}
            $width={$width}
          >
            {children}
          </S.CustomModalContent>
        </S.CustomModalSection>
      </S.CustomModalBackground>
    </ModalPortal>
  )
}

export default CustomModal
