import * as GS from "@/components/Navbar/Navbar.Styles"
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
  const { handleMenuClick, PostEditModal, notificationModal } = useMenuClick()

  const profileImage = user.image || StandardUserImage

  const navigate = useNavigate()

  const handleNavbarProfileClick = () => {
    navigate(`/profile/${user._id}`)
  }

  return (
    <>
      <S.NavbarRightListLayout>
        {isLoggedIn ? (
          <NavbarLoggedInMenu handleMenuClick={handleMenuClick} />
        ) : (
          <NavbarNotLoggedInMenu handleMenuClick={handleMenuClick} />
        )}

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
