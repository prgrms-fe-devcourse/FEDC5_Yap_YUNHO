import * as S from "./SignupInputItem.Styles"
import Input from "@/components/Input/Input"
import type { OnChange } from "../../types"

interface SignupInputItemProp {
  title?: string
  type: string
  name: string
  placeholder: string
  errorMessage?: string
  value: string
  onChange: OnChange
}

const SignupInputItem = ({
  title,
  type,
  name,
  placeholder,
  errorMessage,
  value,
  onChange,
}: SignupInputItemProp) => {
  return (
    <S.SignupInputItemLayout>
      <S.SignupInputItemTitle>{title}</S.SignupInputItemTitle>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.SignupInputItemLayout>
  )
}

export default SignupInputItem
