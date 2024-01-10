import LoginComponent from "./components/Login/LoginComponent"
import ServiceInfoComponent from "./components/ServiceInfo/ServiceInfoComponent"
import * as S from "./Login.styles"

export default function Login() {
  return (
    <S.LoginLayout>
      <S.LoginFormContainer>
        <ServiceInfoComponent />
        <LoginComponent />
      </S.LoginFormContainer>
    </S.LoginLayout>
  )
}
