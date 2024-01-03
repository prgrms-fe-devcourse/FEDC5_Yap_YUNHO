import { NavbarMenuProps } from "@/components/Navbar/types"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import NavbarMenuItem from "../NavbarMenuItem"

const NavbarLoggedInMenu = ({
  handleMenuClick,
  $isToggle,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <NavbarMenuItem handleMenuClick={handleMenuClick}>
        로그아웃
      </NavbarMenuItem>
    </NavbarMenuList>
  )
}

export default NavbarLoggedInMenu
