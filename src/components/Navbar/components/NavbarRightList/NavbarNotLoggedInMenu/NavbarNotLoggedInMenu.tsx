import Button from "@/components/Button/Button"
import { hanldleMenuClickProps } from "../NavbarRightList"
const NavbarNotLoggedInMenu = ({ handleMenuClick }: hanldleMenuClickProps) => {
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

export default NavbarNotLoggedInMenu
