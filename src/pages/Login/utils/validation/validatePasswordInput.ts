import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "../../constants/passwordValidation"

export const validatePasswordInput = (password: string): string => {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`
  }
  if (password.length > PASSWORD_MAX_LENGTH) {
    return `비밀번호는 최대 ${PASSWORD_MAX_LENGTH}자 이하이어야 합니다.`
  }
  return ""
}
