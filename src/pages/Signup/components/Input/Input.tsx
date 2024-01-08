import { ChangeEvent } from "react"
import * as S from "./Input.Styles"
import type { AllowedInputType } from "../../types/index"
type OnChange = ({ target }: ChangeEvent<HTMLInputElement>) => void

interface InputProp {
  type: AllowedInputType
  placeholder: string
  name: string
  value: string
  onChange?: OnChange
}

type InputTypeList = {
  [key in AllowedInputType]: string
}

const Input = ({ type, name, value, placeholder, onChange }: InputProp) => {
  const inputTypeList: InputTypeList = {
    email: "text",
    nickname: "text",
    password: "password",
  }

  const getInputFieldByType = (type: AllowedInputType) => {
    switch (type) {
      case "email":
      case "nickname":
        return (
          <S.Input
            type={inputTypeList[type]}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      case "password":
        return (
          <S.Input
            type={inputTypeList[type]}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
    }
  }

  return <S.InputLayout>{getInputFieldByType(type)}</S.InputLayout>
}

export default Input
