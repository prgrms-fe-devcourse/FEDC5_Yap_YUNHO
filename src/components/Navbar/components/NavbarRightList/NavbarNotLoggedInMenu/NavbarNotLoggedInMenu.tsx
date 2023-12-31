import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import { NavbarMenuProps } from "@/components/Navbar/types"

const NavbarNotLoggedInMenu = ({
  handleMenuClick,
  $isToggle = false,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>로그인</NavbarMenuItem>
    </NavbarMenuList>
  )
}

export default NavbarNotLoggedInMenu
