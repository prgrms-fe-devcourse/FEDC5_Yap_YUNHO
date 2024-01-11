import { ForwardedRef, RefObject, forwardRef, useState } from "react"
import * as S from "./Input.Styles"
import type { OnChange, AllowedSignupInputType } from "../../types/index"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

/**
 * Input 컴포넌트 사용법
 * types/index.ts 에서 필요한 타입을 만들어서 참조해온 후
 * InputProp의 type에 넣고 나머지 필요한 곳에 넣으면 됩니다.
 *
 * Input 컴포넌트가 필요한 곳에서 <Input type="넣고 싶은 타입"/>
 * 으로 쓰면 됩니다!
 */
interface InputProp {
  type: AllowedSignupInputType
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

    const getInputFieldByType = (type: AllowedSignupInputType) => {
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
