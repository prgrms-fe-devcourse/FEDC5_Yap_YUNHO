import useAuthUserStore from "@/stores/useAuthUserStore"
import LoginComponent from "./components/Login/LoginComponent"
import ServiceInfoComponent from "./components/ServiceInfo/ServiceInfoComponent"
import * as S from "./Login.styles"
import { Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import useLocalStorage from "@/hooks/useLocalStorage"

const SIGNUP_TEMPORARY_DATA = "SIGNUP_TEMPORARY_DATA"

export default function Login() {
  const { isLoggedIn } = useAuthUserStore()
  const location = useLocation()
  const [, , removeLocalStorageItem] = useLocalStorage(SIGNUP_TEMPORARY_DATA, {
    selectedFormComponent: "First",
    authToken: "",
  })

  useEffect(() => {
    if (location.pathname === "/login") {
      removeLocalStorageItem()
    }
  }, [location.pathname, removeLocalStorageItem])

  return (
    <>
      {isLoggedIn ? (
        <Navigate
          to="/"
          replace={true}
        />
      ) : (
        <S.LoginLayout>
          <S.LoginComponentContainer>
            <ServiceInfoComponent />
            <LoginComponent />
          </S.LoginComponentContainer>
        </S.LoginLayout>
      )}
    </>
  )
}
