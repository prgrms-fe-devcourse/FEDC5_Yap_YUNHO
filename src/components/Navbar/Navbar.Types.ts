export type HandleMenuClickProps = (menu: string) => void
import { ReactNode } from "react"

export interface NavbarMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
  children?: ReactNode
  NotificationListData?: Notification[]
}
