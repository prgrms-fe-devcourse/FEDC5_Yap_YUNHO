import * as S from "./Signup.Styles"
import SignupFirstForm from "./components/SignupFirstForm/SignupFirstForm"
import SignupSecondForm from "./components/SignupSecondForm/SignupSecondForm"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"

const SIGNUP_TEMPORARY_DATA = "SIGNUP_TEMPORARY_DATA"

export default function Signup() {
  const [changeForm, setChangeForm] = useState("First")

  return (
    <>
      <S.SignupLayout>
        {changeForm === "First" ? (
          <SignupFirstForm changeSignupFormComponent={setChangeForm} />
        ) : (
          <SignupSecondForm />
        )}
      </S.SignupLayout>
    </>
  )
}
