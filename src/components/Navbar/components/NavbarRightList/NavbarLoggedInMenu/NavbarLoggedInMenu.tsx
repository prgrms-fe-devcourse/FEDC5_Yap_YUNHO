import { NavbarMenuProps } from "@/components/Navbar/Navbar.Types"
import { NavbarMenuList } from "./../NavbarRightList.Styles"
import NavbarMenuItem from "../NavbarMenuItem/NavbarMenuItem"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"
import PostEdit from "@/components/PostEdit/PostEdit"

const NavbarLoggedInMenu = ({
  handleMenuClick,
  $isToggle,
}: NavbarMenuProps) => {
  const { isShowEditModal, showEditModal } = usePostEditModalStore()
  return (
    <>
      <NavbarMenuList $isToggle={$isToggle}>
        <NavbarMenuItem handleMenuClick={showEditModal}>
          {"게시물 생성"}
        </NavbarMenuItem>
        <NavbarMenuItem handleMenuClick={handleMenuClick}>
          {"DM"}
        </NavbarMenuItem>
        <NavbarMenuItem handleMenuClick={handleMenuClick}>
          {"알림"}
        </NavbarMenuItem>
        <NavbarMenuItem handleMenuClick={handleMenuClick}>
          {"로그아웃"}
        </NavbarMenuItem>
      </NavbarMenuList>

      {isShowEditModal && <PostEdit postId="newPost" />}
    </>
  )
}

export default NavbarLoggedInMenu
