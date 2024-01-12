import { useState } from "react"
import * as S from "./Signup.Styles"
import FirstSignupForm from "./components/FirstSignupForm/FirstSignupForm"
import SecondSignupForm from "./components/SecondSignupForm/SecondSignupForm"
import { Navigate } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

export default function Signup() {
  const { isLoggedIn } = useAuthUserStore()

  const [selectedFormComponent, setSelectedFormComponent] = useState("First")

  const handleSelectedFormComponent = (): void => {
    setSelectedFormComponent("Second")
  }

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <S.SignupLayout>
          {selectedFormComponent === "First" ? (
            <FirstSignupForm
              handleSelectedFormComponent={handleSelectedFormComponent}
            />
          ) : (
            <SecondSignupForm />
          )}
        </S.SignupLayout>
      )}
    </>
  )
}
