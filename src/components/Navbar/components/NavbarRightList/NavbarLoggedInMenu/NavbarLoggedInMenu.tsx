import Button from "@/components/Button/Button"
import { HandleMenuClickProps } from "../NavbarRightList"
import { theme } from "@/styles/theme"

interface NavbarNotLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
}
const NavbarLoggedInMenu = ({
  handleMenuClick,
}: NavbarNotLoggedInMenuProps) => {
  return (
    <Button
      $fontColor={theme.colors.white}
      onClick={() => {
        handleMenuClick("로그아웃")
      }}
    >
      <p>로그아웃</p>
    </Button>
  )
}

export default NavbarLoggedInMenu
