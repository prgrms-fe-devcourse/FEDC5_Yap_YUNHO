import NavbarNotLoggedInMenuItem from "./NavbarNotLoggedInMenuItem"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import { NavbarMenuProps } from "@/components/Navbar/types"

const NavbarNotLoggedInMenu = ({
  handleMenuClick,
  $isToggle = false,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <NavbarNotLoggedInMenuItem handleMenuClick={handleMenuClick}>
        게시물 생성
      </NavbarNotLoggedInMenuItem>
      <NavbarNotLoggedInMenuItem handleMenuClick={handleMenuClick}>
        DM
      </NavbarNotLoggedInMenuItem>
      <NavbarNotLoggedInMenuItem handleMenuClick={handleMenuClick}>
        알림
      </NavbarNotLoggedInMenuItem>
      <NavbarNotLoggedInMenuItem handleMenuClick={handleMenuClick}>
        로그인
      </NavbarNotLoggedInMenuItem>
    </NavbarMenuList>
  )
}

export default NavbarNotLoggedInMenu
