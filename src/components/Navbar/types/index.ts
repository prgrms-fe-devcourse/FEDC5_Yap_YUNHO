export type HandleMenuClickProps = (menu: string) => void

export interface NavbarMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
  children?: string
}
