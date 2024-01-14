import { EMAIL_REGEX } from "../../constants/emailValidation"
import { EMAIL_ERROR_MESSAGE } from "../../constants/errorMessage"
export const validateEmailInput = (email: string): string => {
  if (!EMAIL_REGEX.test(email)) {
    return EMAIL_ERROR_MESSAGE
  }
  return ""
}
