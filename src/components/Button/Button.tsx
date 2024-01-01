// NavButton.js
import { ReactNode } from "react"
import * as S from "./Button.Styles"

interface ButtonProps {
  height: string
  color?: string
  fontSize: string
  $fontColor?: string
  children: ReactNode
  onClick?: () => void
}

const Button = ({
  height = "4.5rem",
  color = "#F6F9F0",
  fontSize = "2rem",
  $fontColor = "#000",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonLayout
      height={height}
      color={color}
      fontSize={fontSize}
      $fontColor={$fontColor}
      {...rest}
    >
      {children}
    </S.ButtonLayout>
  )
}

export default Button
