import React from "react"

interface LoginEmailInputProps {
  updateEmail: Function
}

const LoginEmailInput: React.FC<LoginEmailInputProps> = ({ updateEmail }) => {
  return (
    <div style={{ margin: "2rem" }}>
      <input
        type="text"
        onChange={(event) => updateEmail(event.target.value)}
      ></input>
    </div>
  )
}

export default LoginEmailInput
