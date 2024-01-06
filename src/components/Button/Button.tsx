import { ReactNode } from "react"
import * as S from "./Button.Styles"
import { theme } from "@/styles/theme"

interface ButtonProps {
  $color?: string
  $fontSize?: string
  $fontColor?: string
  children: ReactNode
  onClick?: () => void
}

const Button = ({
  $color = "none",
  $fontSize = `${theme.fontSizes.medium}`,
  $fontColor = `${theme.colors.black}`,
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
