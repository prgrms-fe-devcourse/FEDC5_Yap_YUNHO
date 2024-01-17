import { ReactNode } from "react"

export type HandleMenuClickProps = (menu: string) => void

export interface NavbarMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
  menu?: string
  children?: ReactNode
  NotificationListData?: Notification[]
}
