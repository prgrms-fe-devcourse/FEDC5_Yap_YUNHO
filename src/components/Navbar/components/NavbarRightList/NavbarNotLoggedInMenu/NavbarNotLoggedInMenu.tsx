import * as S from "./NavbarNotLoggedInMenu.Styles"
import NavbarNotLoggedInMenuItem from "./NavbarNotLoggedInMenuItem"
import { HandleMenuClickProps } from "../NavbarRightList"

interface NavbarNotLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
  $isToggle?: boolean
}

const NavbarNotLoggedInMenu = ({
  handleMenuClick,
  $isToggle = false,
}: NavbarNotLoggedInMenuProps) => {
  return (
    <S.NavbarNotLoggedInMenuList $isToggle={$isToggle}>
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
    </S.NavbarNotLoggedInMenuList>
  )
}

export default NavbarNotLoggedInMenu
