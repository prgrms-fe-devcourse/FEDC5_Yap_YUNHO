import { useState } from "react"
import LoginEmailInput from "./LoginEmailInput"
import LoginPasswordInput from "./LoginPasswordInput"

const LoginComponent = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" })

  const updateEmail = (email: string) => {
    setUserInfo((userInfo) => ({ ...userInfo, email }))
  }
  const updatePassword = (password: string) => {
    setUserInfo((userInfo) => ({ ...userInfo, password }))
  }

  return (
    <div>
      <LoginEmailInput updateEmail={updateEmail}></LoginEmailInput>
      <LoginPasswordInput updatePassword={updatePassword}></LoginPasswordInput>
      <button onClick={() => console.log(userInfo)}> Login</button>
    </div>
  )
}

export default LoginComponent
