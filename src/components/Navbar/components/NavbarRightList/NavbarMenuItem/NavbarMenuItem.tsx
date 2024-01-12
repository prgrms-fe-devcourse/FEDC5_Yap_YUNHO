import Button from "@/components/Button/Button"
import * as S from "./NavbarMenuItem.Styles"
import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"
const NavbarMenuItem = ({ children, handleMenuClick }: NavbarMenuProps) => {
  return (
    <S.NavbarMenuContainer>
      <Button
        $fontSize={"2rem"}
        onClick={() => {
          if (!children) {
            return
          }

          if (children === "로그인") {
            return handleMenuClick(children)
          }

          if (children === "로그아웃") {
            return handleMenuClick(children)
          }

          if (children === "DM") {
            return handleMenuClick(children)
          }
          if (children === "게시물 생성") {
            return handleMenuClick(children)
          }

          if (children === "알림") {
            return handleMenuClick(children)
          }
        }}
      >
        <p>{children}</p>
      </Button>
      <S.NavbarMenuDivider />
    </S.NavbarMenuContainer>
  )
}

export default NavbarMenuItem
