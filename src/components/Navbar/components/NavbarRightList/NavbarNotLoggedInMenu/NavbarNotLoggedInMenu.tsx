import * as S from "./NavbarNotLoggedInMenu.Styles"
import NavbarNotLoggedInMenuItem from "./NavbarNotLoggedInMenuItem"
import { HandleMenuClickProps } from "../NavbarRightList"
interface NavbarNotLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
}

const NavbarNotLoggedInMenu = ({
  handleMenuClick,
}: NavbarNotLoggedInMenuProps) => {
  return (
    <S.NavbarNotLoggedInMenuList>
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
