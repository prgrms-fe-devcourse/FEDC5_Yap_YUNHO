import * as S from "./LoginInputContainer.Styles"
import LoginInputItem from "./LoginInputItem"

import type { UpdateUserInfo } from "../../../types"
interface LoginInputContainerProps {
  updateUserInfo: UpdateUserInfo
  type: string
  name: string
  placeholder: string
}

const LoginInputContainer = ({
  updateUserInfo,
  type,
  name,
  placeholder,
}: LoginInputContainerProps) => {
  return (
    <S.LoginInputContainerLayout>
      <LoginInputItem
        updateUserInfo={updateUserInfo}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </S.LoginInputContainerLayout>
  )
}

export default LoginInputContainer
