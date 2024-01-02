import Button from "@/components/Button/Button"
import { HandleMenuClickProps } from "../NavbarRightList"

interface NavbarNotLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
}

const NavbarLoggedInMenu = ({
  handleMenuClick,
}: NavbarNotLoggedInMenuProps) => {
  return (
    <Button
      $fontColor="#fff"
      onClick={() => {
        handleMenuClick("로그아웃")
      }}
    >
      <p>로그아웃</p>
    </Button>
  )
}

export default NavbarLoggedInMenu
