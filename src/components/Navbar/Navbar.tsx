import { useLocation } from "react-router-dom"
import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"
import { useEffect } from "react"
import authToken from "@/stores/authToken"
import { AUTH_API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useModal from "../Modal/hooks/useModal"
import AlertModal from "../Modal/components/AlertModal/AlertModal"
import { NAVBAR_ERROR_MESSAGE } from "@/constants/errorMessage"

const LOGIN_PAGE_PATH_NAME = "/login"
const SIGNUP_PAGE_PATH_NAME = "/signup"
const USER_EDIT_PAGE_PATH_NAME = "/useredit"

const Navbar = () => {
  const { isShowModal, showModal, closeModal } = useModal()
  const { updateUser, setLogout } = useAuthUserStore()
  const { pathname } = useLocation()

  useEffect(() => {
    const hasToken = authToken.getToken()
    if (!hasToken) {
      return
    }

    AUTH_API.get("/auth-user")
      .then((res) => updateUser(res.data))
      .catch(() => {
        showModal()
        setLogout()
      })
  }, [updateUser, showModal, setLogout])

  if (
    pathname === SIGNUP_PAGE_PATH_NAME ||
    pathname === USER_EDIT_PAGE_PATH_NAME
  ) {
    return
  }

  const isLoginPage = pathname === LOGIN_PAGE_PATH_NAME

  return (
    <>
      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        alertMessage={NAVBAR_ERROR_MESSAGE.REDIRECT_AUTH_USER}
      />

      <S.NavbarLayout>
        <NavbarLeftList />
        {!isLoginPage && <NavbarRightList />}
      </S.NavbarLayout>
    </>
  )
}

export default Navbar
