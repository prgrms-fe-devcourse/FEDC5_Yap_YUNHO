import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import { NavbarMenuProps } from "@/components/Navbar/types"
import * as S from "./NavbarMenuItem.Styles"

const NavbarMenuItem = ({ children, handleMenuClick }: NavbarMenuProps) => {
  return (
    <S.NavbarMenuContainer>
      <Button
        $fontColor={theme.colors.white}
        onClick={() => {
          // string | undefined 문제..
          if (!(typeof children === "string")) {
            return
          }

          handleMenuClick(children as string)
        }}
      >
        <p>{children}</p>
      </Button>
      <S.NavbarMenuDivider />
    </S.NavbarMenuContainer>
  )
}

export default NavbarMenuItem
