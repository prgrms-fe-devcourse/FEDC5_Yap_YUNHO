import * as S from "./LoginInputContainer.Styles"
import LoginInputItem from "./LoginInputItem"

import type { UpdateUserInfo, AllowedInputType } from "../../../types"
interface LoginInputContainerProps {
  updateUserInfo: UpdateUserInfo
  type: AllowedInputType
  placeholder: string
}

const LoginInputContainer = ({
  updateUserInfo,
  type,
  placeholder,
}: LoginInputContainerProps) => {
  return (
    <S.LoginInputContainerLayout>
      <LoginInputItem
        updateUserInfo={updateUserInfo}
        type={type}
        placeholder={placeholder}
      />
    </S.LoginInputContainerLayout>
  )
}

export default LoginInputContainer
