import LoginComponent from "./components/Login/LoginComponent"
import ServiceInfoComponent from "./components/ServiceInfo/ServiceInfoComponent"
import * as S from "./Login.styles"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  return (
    <S.LoginLayout>
      <S.ServiceLogoContainer>
        <S.ServiceLogo onClick={() => navigate("/")} />
      </S.ServiceLogoContainer>
      <S.LoginFormContainer>
        <ServiceInfoComponent />
        <LoginComponent />
      </S.LoginFormContainer>
    </S.LoginLayout>
  )
}
