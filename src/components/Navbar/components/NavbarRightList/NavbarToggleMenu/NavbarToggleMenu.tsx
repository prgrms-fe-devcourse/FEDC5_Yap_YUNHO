import NavbarNotLoggedInMenu from "../NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import * as S from "./NavbarToggleMenu.Styles"
import { NavbarMenuProps } from "@/components/Navbar/types"

const NavbarToggleMenu = ({
  $isToggle = false,
  handleMenuClick,
}: NavbarMenuProps) => {
  return (
    <S.NavbarToggleMenuLayout>
      <NavbarNotLoggedInMenu
        handleMenuClick={handleMenuClick}
        $isToggle={$isToggle}
      />
    </S.NavbarToggleMenuLayout>
  )
}

export default NavbarToggleMenu
