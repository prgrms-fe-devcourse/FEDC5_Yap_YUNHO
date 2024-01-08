import * as S from "./SignupInputItem.Styles"
import Input from "./Input"
import type { AllowedInputType } from "../../types"
import type { OnChange } from "./SignupInputContainer"

interface SignupInputItemProp {
  title?: string
  type: AllowedInputType
  name: string
  placeholder: string
  errorMessage?: string
  onChange: OnChange
}

const SignupInputItem = ({
  title,
  type,
  name,
  placeholder,
  errorMessage,
  onChange,
}: SignupInputItemProp) => {
  return (
    <S.SignupInputItemLayout>
      <S.SignupInputItemTitle>{title}</S.SignupInputItemTitle>

      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />

      <div>{errorMessage}</div>
    </S.SignupInputItemLayout>
  )
}

export default SignupInputItem
