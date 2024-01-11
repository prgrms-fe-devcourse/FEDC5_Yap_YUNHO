import * as S from "./Signup.Styles"
import FirstSignupForm from "./components/FirstSignupForm/FirstSignupForm"
import SecondSignupForm from "./components/SecondSignupForm/SecondSignupForm"

export default function Signup() {
  return (
    <S.SignupLayout>
      <FirstSignupForm />
      <SecondSignupForm />
    </S.SignupLayout>
  )
}
