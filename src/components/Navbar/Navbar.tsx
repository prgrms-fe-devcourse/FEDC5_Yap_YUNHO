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

const Navbar = () => {
  const { isShowModal, showModal, closeModal } = useModal()

  const { updateUser, setLogout } = useAuthUserStore()

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

  const { pathname } = useLocation()
  const NavbarFlag = checkPathName(pathname)
  if (!NavbarFlag) {
    return
  }

  const isLoginPage = NavbarFlag === "login"

  return (
    <>
      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        alertMessage="에러 메시지임"
      />

      <S.NavbarLayout>
        <NavbarLeftList />
        {!isLoginPage && <NavbarRightList />}
      </S.NavbarLayout>
    </>
  )
}

export default Navbar

const checkPathName = (path: string) => {
  if (path.includes("useredit") || path.includes("signup")) {
    return false
  }

  if (path.includes("login")) {
    return "login"
  }

  return true
}
