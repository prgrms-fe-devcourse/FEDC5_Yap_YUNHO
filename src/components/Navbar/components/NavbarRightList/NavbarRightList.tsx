import * as GS from "../../Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import NavbarLoggedInMenu from "./NavbarLoggedInMenu/NavbarLoggedInMenu"
import NavbarNotLoggedInMenu from "./NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import MenuIcon from "@mui/icons-material/Menu"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import NavbarToggleMenu from "./NavbarToggleMenu/NavbarToggleMenu"
import useToggle from "@/hooks/useToggle"
import useMenuClick from "../../hooks/useNavMenuClick"
import CloseIcon from "@mui/icons-material/Close"
import StandardUserImage from "@/assets/standard.jpeg"

const NavbarRightList = () => {
  const { isLoggedIn, user } = useAuthUserStore()
  const { isToggle, toggleRef, handleToggle } = useToggle()
  const {
    handleMenuClick,
    NotificationListData,
    PostEditModal,
    notificationModal,
  } = useMenuClick()

  const profileImage = user.image || StandardUserImage

  const navigate = useNavigate()

  const handleNavbarProfileClick = () => {
    navigate(`/profile/${user._id}`)
  }

  return (
    <>
      <S.NavbarRightListLayout>
        {/* 메뉴들 */}

        {isLoggedIn ? (
          <NavbarLoggedInMenu
            handleMenuClick={handleMenuClick}
            NotificationListData={NotificationListData}
          />
        ) : (
          <NavbarNotLoggedInMenu handleMenuClick={handleMenuClick} />
        )}

        {/* 햄버거 토글 버튼*/}
        <GS.NavbarToggleButton
          onClick={handleToggle}
          ref={toggleRef}
        >
          {isToggle ? <CloseIcon /> : <MenuIcon />}

          <NavbarToggleMenu
            $isToggle={isToggle}
            handleMenuClick={handleMenuClick}
          />
        </GS.NavbarToggleButton>

        {/* 프로필 버튼*/}
        <GS.NavbarButton onClick={handleNavbarProfileClick}>
          {isLoggedIn && (
            <S.NavbarProfile
              src={profileImage}
              alt="프로필"
            />
          )}
        </GS.NavbarButton>
      </S.NavbarRightListLayout>
      {notificationModal}
      {PostEditModal}
    </>
  )
}

export default NavbarRightList
