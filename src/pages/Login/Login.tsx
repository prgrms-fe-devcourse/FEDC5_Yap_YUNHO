import useAuthUserStore from "@/stores/useAuthUserStore"
import LoginComponent from "./components/Login/LoginComponent"
import ServiceInfoComponent from "./components/ServiceInfo/ServiceInfoComponent"
import * as S from "./Login.styles"
import { Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import useSessionStorage from "@/hooks/useSessionStorage"

const SIGNUP_TEMPORARY_DATA = "SIGNUP_TEMPORARY_DATA"

export default function Login() {
  const { isLoggedIn } = useAuthUserStore()
  const location = useLocation()
  const [, , removeSessionStorageItem] = useSessionStorage(
    SIGNUP_TEMPORARY_DATA,
    {
      selectedFormComponent: "First",
    },
  )

  useEffect(() => {
    if (location.pathname === "/login") {
      removeSessionStorageItem()
    }
  }, [location.pathname, removeSessionStorageItem])

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
