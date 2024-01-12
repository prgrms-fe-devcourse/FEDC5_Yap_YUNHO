import { PASSWORD_MIN_LENGTH } from "../../constants/passwordValidation"

export const validatePasswordInput = (password: string) => {
  return password.length >= PASSWORD_MIN_LENGTH
}
