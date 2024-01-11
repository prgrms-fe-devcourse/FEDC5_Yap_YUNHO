import { ForwardedRef, RefObject, forwardRef, useState } from "react"
import * as S from "./Input.Styles"
import type { OnChange, AllowedLoginInputType } from "../../../types/index"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

interface InputProp {
  type: AllowedLoginInputType
  placeholder?: string
  name?: string
  value?: string
  onChange?: OnChange
  ref?: RefObject<HTMLInputElement>
}

const Input = forwardRef(
  (
    { type, name, value, placeholder, onChange }: InputProp,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleVisible = () => {
      setIsVisible(!isVisible)
    }

    const getInputFieldByType = (
      type: AllowedLoginInputType | "nickname" | "file",
    ) => {
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
                autoComplete="off"
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
            <S.InputField
              type="file"
              name={name}
              value={value}
              style={{ display: "none" }}
              placeholder={placeholder}
              ref={ref}
              accept="image/*"
              onChange={onChange}
            />
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
  },
)

export default Input
