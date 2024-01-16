import * as S from "./UserEditInputItem.Styles"
import Input from "@/components/Input/Input"
import type { OnChange } from "../../types"

interface UserEditInputItemProp {
  title?: string
  type: string
  name: string
  placeholder?: string
  errorMessage?: string
  value: string
  onChange?: OnChange
  disabled?: boolean
}

const UserEditInputItem = ({
  title,
  type,
  name,
  placeholder,
  errorMessage,
  value,
  onChange,
  disabled,
}: UserEditInputItemProp) => {
  return (
    <S.UserEditInputItemLayout>
      <S.UserEditInputItemTitle>{title}</S.UserEditInputItemTitle>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.UserEditInputItemLayout>
  )
}

export default UserEditInputItem
