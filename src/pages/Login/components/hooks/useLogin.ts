import { useRef } from "react"
import type { AllowedLoginInputType } from "../../types"

interface UserInfoRef {
  email: string
  password: string
}

const useLogin = () => {
  const userInfoRef = useRef<UserInfoRef>({ email: "", password: "" })
  const updateUserInfo = (value: string, type: AllowedLoginInputType) => {
    userInfoRef.current[type] = value
  }

  return { userInfoRef, updateUserInfo }
}

export default useLogin
