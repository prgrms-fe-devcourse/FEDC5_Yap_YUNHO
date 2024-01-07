import { NavbarMenuProps } from "@/components/Navbar/types"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem"

const NavbarLoggedInMenu = ({
  handleMenuClick,
  $isToggle,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>
        게시물 생성
      </NavbarMenuItem>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>DM</NavbarMenuItem>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>알림</NavbarMenuItem>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>
        로그아웃
      </NavbarMenuItem>
    </NavbarMenuList>
  )
}

export default NavbarLoggedInMenu
