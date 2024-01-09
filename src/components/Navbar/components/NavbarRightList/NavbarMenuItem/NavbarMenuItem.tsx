import Button from "@/components/Button/Button"
import { NavbarMenuProps } from "@/components/Navbar/types"
import * as S from "./NavbarMenuItem.Styles"

const NavbarMenuItem = ({ children, handleMenuClick }: NavbarMenuProps) => {
  return (
    <S.NavbarMenuContainer>
      <Button
        $fontSize={"1.6rem"}
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
