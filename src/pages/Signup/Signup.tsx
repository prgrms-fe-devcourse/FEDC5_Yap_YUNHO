import { useState } from "react"
import * as S from "./Signup.Styles"
import SignupFirstForm from "./components/SignupFirstForm/SignupFirstForm"
import SignupSecondForm from "./components/SignupSecondForm/SignupSecondForm"
import { Navigate } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

export default function Signup() {
  const { isLoggedIn } = useAuthUserStore()
  const [userToken, setUserToken] = useState("")
  const [selectedFormComponent, setSelectedFormComponent] = useState("First")

  const handleSelectedFormComponent = (): void => {
    setSelectedFormComponent("Second")
  }

  return (
    <>
      {isLoggedIn ? (
        <Navigate
          to="/"
          replace={true}
        />
      ) : (
        <S.SignupLayout>
          {selectedFormComponent === "First" ? (
            <SignupFirstForm
              handleSelectedFormComponent={handleSelectedFormComponent}
              setUserToken={setUserToken}
            />
          ) : (
            <SignupSecondForm userToken={userToken} />
          )}
        </S.SignupLayout>
      )}
    </>
  )
}
