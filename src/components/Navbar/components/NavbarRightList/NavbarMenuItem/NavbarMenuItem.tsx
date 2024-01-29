import Button from "@/components/Button/Button"
import * as S from "./NavbarMenuItem.Styles"
import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"
import Brightness1Icon from "@mui/icons-material/Brightness1"
import useGetNotification from "@/components/NotificationModal/hooks/useGetNotification"

const NavbarMenuItem = ({ menu, handleMenuClick }: NavbarMenuProps) => {
  const { NotificationListData } = useGetNotification()
  const handleMenuItemClick = () => {
    if (!menu) {
      return
    }
    handleMenuClick(menu)
  }

  return (
    <S.NavbarMenuContainer>
      <Button
        $fontSize={"2rem"}
        onClick={handleMenuItemClick}
      >
        <p>{menu}</p>
        {menu === "알림" &&
          NotificationListData &&
          NotificationListData.length > 0 && <Brightness1Icon />}
      </Button>
      <S.NavbarMenuDivider />
    </S.NavbarMenuContainer>
  )
}

export default NavbarMenuItem
