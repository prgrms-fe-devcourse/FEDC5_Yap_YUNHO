import YAPRoute from "@/routes"
import { useEffect } from "react"
import AlertModal from "./components/Modal/components/AlertModal/AlertModal"
import useModal from "./components/Modal/hooks/useModal"
import { NAVBAR_ERROR_MESSAGE } from "./constants/errorMessage"
import { AUTH_API } from "./apis/Api"
import authToken from "./stores/authToken"
import useAuthUserStore from "./stores/useAuthUserStore"

const App = () => {
  const { showModal, isShowModal, closeModal } = useModal()
  const { updateUser, setLogout } = useAuthUserStore()

  useEffect(() => {
    const hasToken = authToken.getToken()
    if (!hasToken) {
      return
    }

    AUTH_API.get("/auth-user")
      .then((res) => updateUser(res.data))
      .catch(() => {
        showModal()
        setLogout()
      })
  }, [setLogout, showModal, updateUser])

  return (
    <>
      <YAPRoute />

      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        alertMessage={NAVBAR_ERROR_MESSAGE.REDIRECT_AUTH_USER}
      />
    </>
  )
}

export default App
