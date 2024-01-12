import useAuthUserStore from "@/stores/useAuthUserStore"
import LoginComponent from "./components/Login/LoginComponent"
import ServiceInfoComponent from "./components/ServiceInfo/ServiceInfoComponent"
import * as S from "./Login.styles"
import { Navigate } from "react-router-dom"

export default function Login() {
  const { isLoggedIn } = useAuthUserStore()

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/" />
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
