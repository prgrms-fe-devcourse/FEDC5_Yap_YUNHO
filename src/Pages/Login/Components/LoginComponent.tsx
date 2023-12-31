import { useRef } from "react"
import LoginInput from "./LoginInput"

const LoginComponent2 = () => {
  const userInfoRef = useRef({ Email: "", Password: "" })

  const updateUserInfo = (value: string, type: string) => {
    if (type === "Email") {
      userInfoRef.current.Email = value
    } else if (type === "Password") {
      userInfoRef.current.Password = value
    }
  }

  const loginAction = () => {
    /** validation 통과한 Email, Password 일 경우에만 로그인 가능하도록 */
    const { Email, Password } = userInfoRef.current
    console.log(Email, Password)
  }

  return (
    <div>
      <LoginInput
        updateUserInfo={updateUserInfo}
        type="Email"
      ></LoginInput>
      <LoginInput
        updateUserInfo={updateUserInfo}
        type="Password"
      ></LoginInput>
      <button onClick={loginAction}> Login</button>
    </div>
  )
}

export default LoginComponent2
