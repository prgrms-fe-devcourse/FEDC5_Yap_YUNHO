import LoginComponent from "./Components/LoginComponent"

import * as S from "./Login.styles"
import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"

export default function Login() {
  return (
    <S.LoginLayout>
      <Link to="/">
        <S.ServiceLogoContainer>
          <S.ServiceLogo
            src={logo}
            alt="로고"
          />
        </S.ServiceLogoContainer>
      </Link>
      <S.LoginFormContainer>
        <S.ServiceInfoComponent>Service Info Component</S.ServiceInfoComponent>

        <LoginComponent></LoginComponent>
      </S.LoginFormContainer>
    </S.LoginLayout>
  )
}
