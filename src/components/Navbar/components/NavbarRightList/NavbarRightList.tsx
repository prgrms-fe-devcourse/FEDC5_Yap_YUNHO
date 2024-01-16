import {
  NavbarButton,
  NavbarToggleButton,
} from "@/components/Navbar/Navbar.Styles"
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
import useModal from "@/components/Modal/hooks/useModal"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

const NavbarRightList = () => {
  const { isLoggedIn, user } = useAuthUserStore()
  const { isToggle, toggleRef, handleToggle } = useToggle()
  const {
    handleMenuClick,
    notificationModal,
    NotificationListData,
    PostEditModal,
  } = useMenuClick()
  const { isShowModal: isShowConfirm, closeModal: closeConfirm } = useModal()

  const proifleImg = user.image || StandardUserImage

  const navigate = useNavigate()

  const handleConfirm = (isAccept: boolean) => {
    closeConfirm()
    if (isAccept) {
      navigate("/login")
    }
  }

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
        <NavbarToggleButton
          onClick={handleToggle}
          ref={toggleRef}
        >
          {isToggle ? <CloseIcon /> : <MenuIcon />}

          <NavbarToggleMenu
            $isToggle={isToggle}
            handleMenuClick={handleMenuClick}
          />
        </NavbarToggleButton>

        {/* 프로필 버튼*/}
        <NavbarButton onClick={handleNavbarProfileClick}>
          {isLoggedIn && (
            <S.NavbarProfile
              src={proifleImg}
              alt="프로필"
            />
          )}
        </NavbarButton>
      </S.NavbarRightListLayout>
      <ConfirmModal
        isShow={isShowConfirm}
        onClose={handleConfirm}
        message={POST_EDIT_ERROR_MESSAGE.AUTH_CHECKER.NOT_LOGIN}
      />
      {notificationModal}
      {PostEditModal}
    </>
  )
}

export default NavbarRightList
