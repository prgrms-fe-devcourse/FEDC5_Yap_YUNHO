import * as S from "./LoginInputContainer.Styles"
import LoginInput from "./LoginInputItem"

type UpdateUserInfo = (value: string, type: string) => void
interface LoginInputContainerProps {
  updateUserInfo: UpdateUserInfo
  errorMessage: string
  type: string
  placeholder: string
}

const LoginInputContainer = ({
  updateUserInfo,
  errorMessage,
  type,
  placeholder,
}: LoginInputContainerProps) => {
  return (
    <S.LoginInputContainerLayout>
      <LoginInput
        updateUserInfo={updateUserInfo}
        type={type}
        placeholder={placeholder}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.LoginInputContainerLayout>
  )
}

export default LoginInputContainer
