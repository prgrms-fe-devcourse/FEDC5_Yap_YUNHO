import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"

const NavbarNotLoggedInMenu = ({
  handleMenuClick,
  $isToggle = false,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <NavbarMenuItem
        handleMenuClick={handleMenuClick}
        menu="로그인"
      />
    </NavbarMenuList>
  )
}

export default NavbarNotLoggedInMenu
