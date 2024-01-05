import * as S from "./NavbarToggleMenu.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import NavbarNotLoggedInMenu from "../NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import { NavbarMenuProps } from "@/components/Navbar/types"
import NavbarLoggedInMenu from "../NavbarLoggedInMenu/NavbarLoggedInMenu"

const NavbarToggleMenu = ({
  $isToggle = false,
  handleMenuClick,
}: NavbarMenuProps) => {
  const { isLoggedIn } = useAuthUserStore()
  return (
    <S.NavbarToggleMenuLayout $isToggle={$isToggle}>
      {isLoggedIn ? (
        <NavbarLoggedInMenu
          handleMenuClick={handleMenuClick}
          $isToggle={$isToggle}
        />
      ) : (
        <NavbarNotLoggedInMenu
          handleMenuClick={handleMenuClick}
          $isToggle={$isToggle}
        />
      )}
    </S.NavbarToggleMenuLayout>
  )
}

export default NavbarToggleMenu
