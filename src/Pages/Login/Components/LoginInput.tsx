import * as S from "./LoginInput.Styles"

type UpdateUserInfo = (value: string, type: string) => void

interface LoginInputPropType {
  updateUserInfo: UpdateUserInfo
  type: string
}

const LoginInput = ({ updateUserInfo, type }: LoginInputPropType) => {
  return (
    <S.LoginInputLayout>
      <S.Input
        type={type === "Password" ? "password" : "email"}
        placeholder={type === "Password" ? "비밀번호" : "이메일"}
        onChange={(event) => updateUserInfo(event.target.value, type)}
      ></S.Input>
    </S.LoginInputLayout>
  )
}

export default LoginInput
