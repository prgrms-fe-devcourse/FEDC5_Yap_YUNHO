import Button from "@/components/Button/Button"
import * as S from "./NavbarMenuItem.Styles"
import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"
const NavbarMenuItem = ({ children, handleMenuClick }: NavbarMenuProps) => {
  return (
    <S.NavbarMenuContainer>
      <Button
        $fontSize={"2rem"}
        onClick={() => {
          // string | undefined 문제..
          if (!(typeof children === "string")) {
            return
          }

          handleMenuClick(children)
        }}
      >
        <p>{children}</p>
      </Button>
      <S.NavbarMenuDivider />
    </S.NavbarMenuContainer>
  )
}

export default NavbarMenuItem
