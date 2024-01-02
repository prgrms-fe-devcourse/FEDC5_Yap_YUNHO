import Button from "@/components/Button/Button"
import { NAV_MENU_LIST } from "@/constants/stores"
import { HandleMenuClickProps } from "../NavbarRightList"
interface NavbarLoggedInMenuProps {
  handleMenuClick: HandleMenuClickProps
}

const NavbarLoggedInMenu = ({ handleMenuClick }: NavbarLoggedInMenuProps) => {
  return (
    <>
      {NAV_MENU_LIST.map((menu) => (
        <Button
          height="4.5rem"
          fontSize="2rem"
          key={menu.title}
          onClick={() => {
            handleMenuClick(menu.title)
          }}
        >
          {menu.title}
        </Button>
      ))}
    </>
  )
}

export default NavbarLoggedInMenu
