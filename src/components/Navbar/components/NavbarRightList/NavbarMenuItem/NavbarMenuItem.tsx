import Button from "@/components/Button/Button"
import * as S from "./NavbarMenuItem.Styles"
import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"
import Brightness1Icon from "@mui/icons-material/Brightness1"
const NavbarMenuItem = ({
  menu,
  handleMenuClick,
  isNotification,
}: NavbarMenuProps) => {
  console.log(menu)
  return (
    <S.NavbarMenuContainer>
      <Button
        $fontSize={"2rem"}
        onClick={() => {
          if (!menu) {
            return
          }
          handleMenuClick(menu)
        }}
      >
        <p>{menu}</p>
        {isNotification && <Brightness1Icon />}
      </Button>
      <S.NavbarMenuDivider />
    </S.NavbarMenuContainer>
  )
}

export default NavbarMenuItem
