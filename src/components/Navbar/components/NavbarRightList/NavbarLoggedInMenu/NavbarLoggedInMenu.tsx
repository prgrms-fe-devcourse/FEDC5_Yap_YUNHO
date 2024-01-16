import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem"
import Brightness1Icon from "@mui/icons-material/Brightness1"
const NavbarLoggedInMenu = ({
  handleMenuClick,
  $isToggle,
  NotificationListData,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>
        게시물 생성
      </NavbarMenuItem>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>DM</NavbarMenuItem>
      {NotificationListData && NotificationListData.length > 0 ? (
        <NavbarMenuItem handleMenuClick={handleMenuClick}>
          알림 <Brightness1Icon />
        </NavbarMenuItem>
      ) : (
        <NavbarMenuItem handleMenuClick={handleMenuClick}>알림</NavbarMenuItem>
      )}

      <NavbarMenuItem handleMenuClick={handleMenuClick}>
        로그아웃
      </NavbarMenuItem>
    </NavbarMenuList>
  )
}

export default NavbarLoggedInMenu
