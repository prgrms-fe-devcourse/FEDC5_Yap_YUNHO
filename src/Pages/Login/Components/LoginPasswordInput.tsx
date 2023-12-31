import React from "react"

interface LoginPasswordInputProps {
  updatePassword: Function
}

const LoginPasswordInput: React.FC<LoginPasswordInputProps> = ({
  updatePassword,
}) => {
  return (
    <div style={{ margin: "2rem" }}>
      <input
        type="password"
        onChange={(event) => updatePassword(event.target.value)}
      ></input>
    </div>
  )
}

export default LoginPasswordInput
