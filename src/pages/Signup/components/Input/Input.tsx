import { ChangeEvent } from "react"
import * as S from "./Input.Styles"
import type { AllowedInputType } from "../../types/index"
type OnChange = ({ target }: ChangeEvent<HTMLInputElement>) => void

interface InputProp {
  type: AllowedInputType
  placeholder: string
  onChange?: OnChange
}

type InputTypeList = {
  [key in AllowedInputType]: string
}

const Input = ({ type, placeholder, onChange }: InputProp) => {
  const inputTypeList: InputTypeList = {
    email: "text",
    name: "text",
    password: "password",
  }

  const getInputFieldByType = (type: AllowedInputType) => {
    switch (type) {
      case "email":
      case "name":
        return (
          <S.Input
            type={inputTypeList[type]}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      case "password":
        return (
          <S.Input
            type={inputTypeList[type]}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
    }
  }

  return <S.InputLayout>{getInputFieldByType(type)}</S.InputLayout>
}

export default Input
