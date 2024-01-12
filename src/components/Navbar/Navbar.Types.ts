export type HandleMenuClickProps = (
  menu: "로그인" | "로그아웃" | "DM" | "게시물 생성" | "알림",
) => void

export interface NavbarMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
  children?: string
}
