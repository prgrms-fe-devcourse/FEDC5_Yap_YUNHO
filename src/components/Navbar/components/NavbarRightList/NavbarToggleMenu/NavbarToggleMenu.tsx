import NavbarNotLoggedInMenu from "../NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import * as S from "./NavbarToggleMenu.Styles"
import { HandleMenuClickProps } from "../NavbarRightList"

interface NavbarNotLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
}

const NavbarToggleMenu = ({
  $isToggle = false,
  handleMenuClick,
}: NavbarNotLoggedInMenuProps) => {
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
