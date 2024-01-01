import React from "react"
import * as S from "./LoginInput.Styles"

interface LoginInputPropType {
  updateUserInfo: Function
  type: string
}

const LoginInput: React.FC<LoginInputPropType> = ({ updateUserInfo, type }) => {
  return (
    <S.LoginInputLayout>
      <S.Input
        type={type === "Password" ? "password" : "text"}
        placeholder={type === "Password" ? "비밀번호" : "이메일"}
        onChange={(event) => updateUserInfo(event.target.value, type)}
      ></S.Input>
    </S.LoginInputLayout>
  )
}

export default LoginInput
