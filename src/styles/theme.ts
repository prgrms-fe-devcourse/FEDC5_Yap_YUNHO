import { DefaultTheme } from "styled-components"

const colors = {
  main: "#2D3250",
  sub: "#424769",
  sub_alt: "#676F9D",
  point: "#F9B17A",
  point_alt: "#FF7F50",
  black: "#000000",
  white: "#ffffff",
  gray40: "#B0B8C1",
}

const fontSizes = {
  small: "1rem",
  semiSmall: "1.2rem",
  medium: "1.4rem",
  semiLarge: "1.6rem",
  large: "2rem",
}

const radius = {
  size4: "0.4rem",
  size8: "0.8rem",
  size12: "1.2rem",
  size16: "1.6rem",
  size20: "2rem",
  circle: "50%",
}

const fontWeight = {
  regular: 400,
  semiBold: 500,
  bold: 700,
}

export type ColorsType = typeof colors
export type FontWeightType = typeof fontWeight
export type SizeType = typeof fontSizes
export type Radius = typeof radius

export const theme: DefaultTheme = {
  colors,
  fontWeight,
  fontSizes,
  radius,
}
