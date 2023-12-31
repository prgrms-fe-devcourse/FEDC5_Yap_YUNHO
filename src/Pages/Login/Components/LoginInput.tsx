import React from "react"

interface LoginInputPropType {
  updateUserInfo: Function
  type: string
}

const LoginInput: React.FC<LoginInputPropType> = ({ updateUserInfo, type }) => {
  return (
    <div style={{ margin: "2rem" }}>
      <input
        type={type === "Password" ? "password" : "text"}
        onChange={(event) => updateUserInfo(event.target.value, type)}
      ></input>
    </div>
  )
}

export default LoginInput
