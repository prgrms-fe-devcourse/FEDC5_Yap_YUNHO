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
      height="4.5rem"
      fontSize="2rem"
      onClick={() => {
        handleMenuClick("로그아웃")
      }}
    >
      로그아웃
    </Button>
  )
}

export default NavbarLoggedInMenu
