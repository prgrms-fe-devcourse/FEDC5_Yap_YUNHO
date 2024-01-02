import Button from "@/components/Button/Button"
import { NAV_MENU_LIST } from "@/constants/stores"
import { HandleMenuClickProps } from "../NavbarRightList"
import { theme } from "@/styles/theme"
interface NavbarNotLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
}

const NavbarNotLoggedInMenuProps = ({
  handleMenuClick,
}: NavbarNotLoggedInMenuProps) => {
  return (
    <>
      {NAV_MENU_LIST.map((menu) => (
        <Button
          key={menu.title}
          $fontColor={theme.colors.white}
          onClick={() => {
            handleMenuClick(menu.title)
          }}
        >
          <p>{menu.title}</p>
        </Button>
      ))}
    </>
  )
}

export default NavbarNotLoggedInMenuProps
