import { EMAIL_REGEX } from "../../constants/emailValidation"

export const validateEmailInput = (email: string): boolean => {
  return EMAIL_REGEX.test(email)
}
