import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import * as S from "./NavbarLoggedInMenu.Styles"
import { NavbarMenuProps } from "@/components/Navbar/types"

const NavbarLoggedInMenu = ({ handleMenuClick }: NavbarMenuProps) => {
  return (
    <S.NavbarLoggedInMenuList>
      <Button
        $fontColor={theme.colors.white}
        onClick={() => {
          handleMenuClick("로그아웃")
        }}
      >
        <p>로그아웃</p>
      </Button>
    </S.NavbarLoggedInMenuList>
  )
}

export default NavbarLoggedInMenu
