import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import { NavbarMenuProps } from "@/components/Navbar/types"
import { NavbarMenuList } from "./../NavbarRightList.Styles"

const NavbarLoggedInMenu = ({
  handleMenuClick,
  $isToggle,
}: NavbarMenuProps) => {
  return (
    <NavbarMenuList $isToggle={$isToggle}>
      <Button
        $fontColor={theme.colors.white}
        onClick={() => {
          handleMenuClick("로그아웃")
        }}
      >
        <p>로그아웃</p>
      </Button>
    </NavbarMenuList>
  )
}

export default NavbarLoggedInMenu
