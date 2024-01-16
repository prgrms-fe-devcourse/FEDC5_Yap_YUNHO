import * as S from "./Signup.Styles"
import SignupFirstForm from "./components/SignupFirstForm/SignupFirstForm"
import SignupSecondForm from "./components/SignupSecondForm/SignupSecondForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

export default function Signup() {
  const { isLoggedIn } = useAuthUserStore()
  const [isFirstForm, setIsFirstForm] = useState(true)
  const [alertMessage, setAlertMessage] = useState("")
  const { isShowModal, showModal } = useModal()
  const navigate = useNavigate()

  const handleChangeForm = () => {
    setIsFirstForm(false)
  }

  const changeAlertMessage = (message: string) => {
    setAlertMessage(message)
  }

  const handleCloseModal = () => {
    navigate("/", { replace: true })
  }

  if (alertMessage) {
    return (
      <AlertModal
        isShow={isShowModal}
        alertMessage={alertMessage}
        onClose={handleCloseModal}
      />
    )
  }

  if (isFirstForm) {
    return (
      <S.SignupLayout>
        <SignupFirstForm
          showModal={showModal}
          changeAlertMessage={changeAlertMessage}
          handleChangeForm={handleChangeForm}
          isLoggedIn={isLoggedIn}
        />
      </S.SignupLayout>
    )
  }

  return (
    <S.SignupLayout>
      <SignupSecondForm />
    </S.SignupLayout>
  )
}
