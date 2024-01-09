import { ChangeEvent, useState } from "react"
import * as S from "./Input.Styles"
import type { AllowedInputType } from "../../../types/index"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

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
  const [isVisible, setIsVisible] = useState(false)

  const inputTypeList: InputTypeList = {
    email: "text",
    nickname: "text",
    password: "password",
  }

  const handleVisible = () => {
    setIsVisible(!isVisible)
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
          <>
            <S.Input
              type={isVisible ? "text" : inputTypeList[type]}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
            <S.VisibleButton
              type="button"
              onClick={handleVisible}
            >
              {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </S.VisibleButton>
          </>
        )
      default:
        return (
          <S.Input
            type="text"
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
