import { theme } from "./../../styles/theme"
import { ReactNode } from "react"
import * as S from "./Button.Styles"

interface ButtonProps {
  $color?: string
  $fontSize?: string
  $fontColor?: string
  children: ReactNode
  onClick?: () => void
}

const Button = ({
  $color = "",
  $fontSize = "2rem",
  $fontColor = `${theme.colors.white}`,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonLayout
      $color={$color}
      $fontSize={$fontSize}
      $fontColor={$fontColor}
      {...rest}
    >
      {children}
    </S.ButtonLayout>
  )
}

export default Button
