import { DefaultTheme, css } from "styled-components"

const colors = {
  main: "#2D3250",
  sub: "#424769",
  sub_alt: "#676F9D",
  point: "#F9B17A",
  point_alt: "#FF7F50",
  black: "#000000",
  white: "#ffffff",
  gray: "#B0B8C1",
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

const zIndex = {
  postSmallCard: 1,
  postSubCard: 2,
  postMainCard: 3,
  homeArrowIcon: 4,
  modalBackground: 5,
  customModalBackground: 6,

  navbarLogo: 1,
  navbarRightList: 2,

  popover: 20,
  NotFound404: 21,
}

const scrollBar = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.sub};
    border-radius: 6px;
  }
`

const scrollBarNone = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const transition = {
  normal: `0.3s`,
}

const opacity = {
  low: 0.3,
  normal: 0.5,
  high: 0.7,
}

const fontFamily = {
  defaultFont: `"BMJUA",'Noto Sans KR', sans-serif`,
}

export type ColorsType = typeof colors
export type FontWeightType = typeof fontWeight
export type SizeType = typeof fontSizes
export type Radius = typeof radius
export type ZIndex = typeof zIndex
export type scrollBar = typeof scrollBar
export type ScrollBarNone = typeof scrollBarNone
export type Transition = typeof transition
export type Opacity = typeof opacity
export type FontFamily = typeof fontFamily

export const theme: DefaultTheme = {
  colors,
  fontWeight,
  fontSizes,
  radius,
  zIndex,
  scrollBar,
  scrollBarNone,
  opacity,
  transition,
  fontFamily,
}
