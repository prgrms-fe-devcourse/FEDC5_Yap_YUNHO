const validateInputs = (Email: string, Password: string) => {
  const isValid = { Email: true, Password: true }
  const errorMessage = { Email: "", Password: "" }
  const validateEmail = (email: string) => {
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    // 비밀번호 최소 길이
    const minLength = 8
    return password.length >= minLength
  }

  // 이메일 유효성 검사
  if (!validateEmail(Email)) {
    isValid.Email = false
    errorMessage.Email = "유효한 이메일을 입력해주세요."
  }

  // 비밀번호 유효성 검사
  if (!validatePassword(Password)) {
    isValid.Password = false
    errorMessage.Password = "비밀번호는 최소 8자 이상이어야 합니다."
  }

  return { isValid, errorMessage }
}

export default validateInputs
