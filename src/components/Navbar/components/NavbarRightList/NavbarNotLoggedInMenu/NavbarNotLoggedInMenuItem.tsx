import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import { HandleMenuClickProps } from "../NavbarRightList"

interface NavbarNotLoggedInMenuProps {
  children: string
  handleMenuClick: HandleMenuClickProps
}

const NavbarNotLoggedInMenuItem = ({
  children,
  handleMenuClick,
}: NavbarNotLoggedInMenuProps) => {
  return (
    <Button
      $fontColor={theme.colors.white}
      onClick={() => {
        handleMenuClick(children)
      }}
    >
      <p>{children}</p>
    </Button>
  )
}

export default NavbarNotLoggedInMenuItem
