import {
  ChangeEvent,
  ForwardedRef,
  RefObject,
  forwardRef,
  useState,
} from "react"
import * as S from "./Input.Styles"
import type { AllowedInputType } from "../../types/index"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

type OnChange = ({ target }: ChangeEvent<HTMLInputElement>) => void

interface InputProp {
  type: AllowedInputType
  placeholder?: string
  name?: string
  value?: string
  onChange?: OnChange
  ref?: RefObject<HTMLInputElement>
}

type InputTypeList = {
  [key in AllowedInputType]: string
}

const Input = forwardRef(
  (
    { type, name, value, placeholder, onChange }: InputProp,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isVisible, setIsVisible] = useState(false)

    const inputTypeList: InputTypeList = {
      email: "text",
      nickname: "text",
      password: "password",
      file: "file",
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
        case "file":
          return (
            <S.Input
              type={inputTypeList[type]}
              name={name}
              value={value}
              style={{ display: "none" }}
              placeholder={placeholder}
              ref={ref}
              onChange={onChange}
            />
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
  },
)

export default Input
