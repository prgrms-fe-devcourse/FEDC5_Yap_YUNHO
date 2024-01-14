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

const Input = ({ type, name, value, placeholder, onChange }: InputProp) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = () => {
    setIsVisible(!isVisible)
  }

  const getInputFieldByType = (type: AllowedInputType) => {
    switch (type) {
      case "email":
      case "nickname":
        return (
          <S.InputField
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      case "password":
        return (
          <>
            <S.InputField
              type={isVisible ? "text" : "password"}
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
          <S.InputField
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