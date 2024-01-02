import { useRef, useState, FormEvent, useEffect } from "react"
import LoginInput from "./LoginInput"
import * as S from "./LoginComponent.Styles"

const LoginComponent = () => {
  const userInfoRef = useRef({ Email: "", Password: "" })
  const [errorMessage, setErrorMessage] = useState({ Email: "", Password: "" })
  const [isValid, setIsValid] = useState({ isEmail: false, isPassword: false })

  const updateUserInfo = (value: string, type: string) => {
    if (type === "Email") {
      userInfoRef.current.Email = value
    } else if (type === "Password") {
      userInfoRef.current.Password = value
    }
  }

  const validateEmail = (email: string) => {
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    // 비밀번호 최소 길이
    const minLength = 8
    return password.length >= minLength
  }

  const loginAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { Email, Password } = userInfoRef.current

    // 이메일 유효성 검사
    if (!validateEmail(Email)) {
      setIsValid((prevValid) => ({ ...prevValid, isEmail: false }))
      setErrorMessage((prevError) => ({
        ...prevError,
        Email: "유효한 이메일을 입력해주세요.",
      }))
    } else {
      setIsValid((prevValid) => ({ ...prevValid, isEmail: true }))
      setErrorMessage((prevError) => ({
        ...prevError,
        Email: "",
      }))
    }

    // 비밀번호 유효성 검사
    if (!validatePassword(Password)) {
      setIsValid((prevValid) => ({ ...prevValid, isPassword: false }))
      setErrorMessage((prevError) => ({
        ...prevError,
        Password: "비밀번호는 최소 8자 이상이어야 합니다.",
      }))
    } else {
      setIsValid((prevValid) => ({ ...prevValid, isPassword: true }))
      setErrorMessage((prevError) => ({
        ...prevError,
        Password: "",
      }))
    }

    // 유효성 검사 통과한 경우 로그인 처리
    // console.log("로그인 성공!")
  }

  useEffect(() => {
    if (!isValid.isEmail || !isValid.isPassword) {
      return
    }
    console.log("로그인 성공!")
  }, [isValid])

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
            Login
          </S.Button>
          <S.Button action="cancel">Cancel</S.Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </S.LoginComponentLayout>
  )
}

export default LoginComponent
