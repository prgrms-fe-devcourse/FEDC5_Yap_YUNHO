import * as S from "./LoginInputItem.Styles"

type UpdateUserInfo = (value: string, type: string) => void

interface LoginInputPropType {
  updateUserInfo: UpdateUserInfo
  type: string
  placeholder: string
}

const LoginInput = ({
  updateUserInfo,
  type,
  placeholder,
}: LoginInputPropType) => {
  return (
    <S.LoginInputLayout>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={(event) => updateUserInfo(event.target.value, type)}
      />
    </S.LoginInputLayout>
  )
}

export default LoginInput
