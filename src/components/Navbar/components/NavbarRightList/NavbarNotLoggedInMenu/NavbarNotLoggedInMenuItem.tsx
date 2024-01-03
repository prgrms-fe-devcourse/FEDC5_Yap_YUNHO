import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import { NavbarMenuProps } from "@/components/Navbar/types"

const NavbarNotLoggedInMenuItem = ({
  children,
  handleMenuClick,
}: NavbarMenuProps) => {
  return (
    <Button
      $fontColor={theme.colors.white}
      onClick={() => {
        // string | undefined 문제..
        handleMenuClick(children as string)
      }}
    >
      <p>{children}</p>
    </Button>
  )
}

export default NavbarNotLoggedInMenuItem
