import * as S from "./LoginInputItem.Styles"

import type { UpdateUserInfo, AllowedInputType } from "../types"

interface LoginInputItemPropType {
  updateUserInfo: UpdateUserInfo
  type: AllowedInputType
  placeholder: string
}

type InputTypeList = {
  [key in AllowedInputType]: string
}

const LoginInputItem = ({
  updateUserInfo,
  type,
  placeholder,
}: LoginInputItemPropType) => {
  const inputTypeList: InputTypeList = {
    email: "text",
    password: "password",
  }

  return (
    <S.LoginInputItemLayout>
      <S.Input
        type={inputTypeList[type]}
        placeholder={placeholder}
        onChange={(event) => updateUserInfo(event.target.value, type)}
      />
    </S.LoginInputItemLayout>
  )
}

export default LoginInputItem
