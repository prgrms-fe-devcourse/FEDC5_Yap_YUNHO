import { useRef, useState, FormEvent } from "react"
import LoginInput from "./Input/LoginInput"
import * as S from "./LoginComponent.Styles"
import validateInputs from "../utils/validateInputs"

const LoginComponent = () => {
  const userInfoRef = useRef({ Email: "", Password: "" })
  const [errorMessage, setErrorMessage] = useState({ Email: "", Password: "" })

  const updateUserInfo = (value: string, type: string) => {
    if (type === "Email") {
      userInfoRef.current.Email = value
    } else if (type === "Password") {
      userInfoRef.current.Password = value
    }
  }

  const loginAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { Email, Password } = userInfoRef.current
    const { isValid, errorMessage } = validateInputs(Email, Password)

    if (!isValid.Email || !isValid.Password) {
      setErrorMessage(errorMessage)
      return
    }
    setErrorMessage({ Email: "", Password: "" })

    console.log("로그인 시도!")
    /** 추후 API 연결 */
    // 로그인 성공시 -> 홈화면으로 이동
    // 로그인 실패시 -> 없는 아이디면 잘못된 아이디 혹은 잘못된 비밀번호 입니다.
  }

  return (
    <S.LoginComponentLayout>
      <S.LoginComponentTitle>로그인</S.LoginComponentTitle>
      <S.LoginForm onSubmit={loginAction}>
        <S.LoginInputContainer>
          <LoginInput
            updateUserInfo={updateUserInfo}
            type="Email"
          />
          {errorMessage.Email && (
            <S.ErrorMessage>{errorMessage.Email}</S.ErrorMessage>
          )}
        </S.LoginInputContainer>
        <S.LoginInputContainer>
          <LoginInput
            updateUserInfo={updateUserInfo}
            type="Password"
          />
          {errorMessage.Password && (
            <S.ErrorMessage>{errorMessage.Password}</S.ErrorMessage>
          )}
        </S.LoginInputContainer>
        <S.ButtonContainer>
          <S.Button
            type="submit"
            action="login"
          >
            로그인
          </S.Button>
          <S.Button
            type="button"
            action="cancel"
            onClick={() => console.log("회원가입 창으로 이동")}
          >
            회원가입
          </S.Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </S.LoginComponentLayout>
  )
}

export default LoginComponent
