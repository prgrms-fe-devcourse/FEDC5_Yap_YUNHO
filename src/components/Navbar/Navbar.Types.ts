export type MenuType = string

export type HandleMenuClickProps = (menu: MenuType) => void

export interface NavbarMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
  children?: MenuType
}
