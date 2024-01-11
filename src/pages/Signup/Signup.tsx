import { useState } from "react"
import * as S from "./Signup.Styles"
import FirstSignupForm from "./components/FirstSignupForm/FirstSignupForm"
import SecondSignupForm from "./components/SecondSignupForm/SecondSignupForm"

export default function Signup() {
  const [selectedFormComponent, setSelectedFormComponent] = useState("First")

  const handleSelectedFormComponent = (): void => {
    setSelectedFormComponent("Second")
  }

  return (
    <S.SignupLayout>
      {selectedFormComponent === "First" ? (
        <FirstSignupForm
          handleSelectedFormComponent={handleSelectedFormComponent}
        />
      ) : (
        <SecondSignupForm />
      )}
    </S.SignupLayout>
  )
}
