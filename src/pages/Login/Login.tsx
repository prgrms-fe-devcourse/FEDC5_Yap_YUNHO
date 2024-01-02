import LoginComponent from "./Components/LoginComponent"

import * as S from "./Login.styles"
import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"

export default function Login() {
  return (
    <S.LoginLayout>
      <S.ServiceLogoContainer>
        <Link to="/">
          <S.ServiceLogo
            src={logo}
            alt="로고"
          />
        </Link>
      </S.ServiceLogoContainer>
      <S.LoginFormContainer>
        <S.ServiceInfoContainer>Service Info Component</S.ServiceInfoContainer>
        <LoginComponent></LoginComponent>
      </S.LoginFormContainer>
    </S.LoginLayout>
  )
}
