import * as S from "./LoginInputItem.Styles"

type UpdateUserInfo = (value: string, type: string) => void

interface LoginInputPropType {
  updateUserInfo: UpdateUserInfo
  type: string
  placeholder: string
}

interface TypeList {
  [index: string]: string
}

const LoginInput = ({
  updateUserInfo,
  type,
  placeholder,
}: LoginInputPropType) => {
  const typeList: TypeList = {
    email: "text",
    text: "text",
    password: "password",
  }

  return (
    <S.LoginInputLayout>
      <S.Input
        type={typeList[type]}
        placeholder={placeholder}
        onChange={(event) => updateUserInfo(event.target.value, type)}
      />
    </S.LoginInputLayout>
  )
}

export default LoginInput
