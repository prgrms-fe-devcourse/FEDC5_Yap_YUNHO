import {
  ForwardedRef,
  RefObject,
  forwardRef,
  useState,
  ChangeEvent,
} from "react"
import * as S from "./Input.Styles"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

type OnChange = (event: ChangeEvent<HTMLInputElement>) => void

interface InputProp {
  type: string
  placeholder?: string
  name?: string
  value?: string
  onChange?: OnChange
  ref?: RefObject<HTMLInputElement>
  disabled?: boolean
}

/**
 * @props
 * type: string
 *
 * placeholder?: string
 *
 * name?: string
 *
 * value?: string
 *
 * onChange?: OnChange
 *
 * ref?: RefObject<HTMLInputElement>
 *
 * @usage
 * Input 컴포넌트가 필요한 곳에서 <Input type="넣고 싶은 타입"/> 으로 쓰면 됩니다!
 */
const Input = forwardRef(
  (
    { type, name, value, placeholder, onChange, disabled }: InputProp,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleVisible = () => {
      setIsVisible(!isVisible)
    }

    const getInputFieldByType = (type: string) => {
      switch (type) {
        case "text":
          return (
            <S.InputField
              type="text"
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              disabled={disabled}
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
              value={value}
              style={{ display: "none" }}
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
