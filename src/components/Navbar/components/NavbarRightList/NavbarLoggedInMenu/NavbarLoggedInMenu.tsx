import Button from "@/components/Button/Button"
import { NAV_MENU_LIST } from "@/constants/stores"
import { hanldleMenuClickProps } from "../NavbarRightList"

const NavbarLoggedInMenu = ({ handleMenuClick }: hanldleMenuClickProps) => {
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
