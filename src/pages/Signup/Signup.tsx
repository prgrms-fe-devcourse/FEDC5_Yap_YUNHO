import * as S from "./Signup.Styles"
import SignupFirstForm from "./components/SignupFirstForm/SignupFirstForm"
import SignupSecondForm from "./components/SignupSecondForm/SignupSecondForm"
import { Navigate } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useLocalStorage from "@/hooks/useLocalStorage"
import { useEffect } from "react"

const SIGNUP_TEMPORARY_DATA = "SIGNUP_TEMPORARY_DATA"

export default function Signup() {
  const { isLoggedIn } = useAuthUserStore()
  const [signupTemporaryData, setSignupTemporaryData, removeLocalStorageItem] =
    useLocalStorage(SIGNUP_TEMPORARY_DATA, {
      selectedFormComponent: "First",
      authToken: "",
    })
  const { selectedFormComponent, authToken } = signupTemporaryData

  const changeSignupFormComponent = (authToken: string): void => {
    setSignupTemporaryData({
      selectedFormComponent: "Second",
      authToken,
    })
  }

  useEffect(() => {
    if (isLoggedIn) {
      removeLocalStorageItem()
    }
  }, [isLoggedIn, removeLocalStorageItem])

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
              changeSignupFormComponent={changeSignupFormComponent}
            />
          ) : (
            <SignupSecondForm authToken={authToken} />
          )}
        </S.SignupLayout>
      )}
    </>
  )
}
