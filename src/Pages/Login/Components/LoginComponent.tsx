import { useRef } from "react"
import LoginInput from "./LoginInput"
import * as S from "./LoginComponent.Styles"

const LoginComponent = () => {
  const userInfoRef = useRef({ Email: "", Password: "" })

  const updateUserInfo = (value: string, type: string) => {
    if (type === "Email") {
      userInfoRef.current.Email = value
    } else if (type === "Password") {
      userInfoRef.current.Password = value
    }
  }

  const loginAction = () => {
    /** validation 통과한 Email, Password 일 경우에만 로그인 가능하도록 */
    const { Email, Password } = userInfoRef.current
    console.log(Email, Password)
  }

  return (
    <S.LoginComponentLayout>
      <S.LoginComponentTitle>로그인</S.LoginComponentTitle>
      <LoginInput
        updateUserInfo={updateUserInfo}
        type="Email"
      ></LoginInput>
      <LoginInput
        updateUserInfo={updateUserInfo}
        type="Password"
      ></LoginInput>
      <S.ButtonContainer>
        <S.Button
          onClick={loginAction}
          style={{ backgroundColor: "#F9B17A" }}
        >
          Login
        </S.Button>
        <S.Button style={{ backgroundColor: "#676F9D" }}>Cancel</S.Button>
      </S.ButtonContainer>
    </S.LoginComponentLayout>
  )
}

export default LoginComponent
