import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useMutation } from "@tanstack/react-query"
import { signup } from "../apis/signup"
// import authToken from "@/stores/authToken"
import useAuthUserStore from "@/stores/useAuthUserStore"
import standard from "@/assets/standard.jpeg"
import { AUTH_API } from "@/apis/Api"

const SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY =
  "SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY"

interface UseSignupFirstFormParam {
  changeSignupFormComponent: () => void
}

const useSignupFirstForm = ({
  changeSignupFormComponent,
}: UseSignupFirstFormParam) => {
  const {
    isShowModal: isShowAlertModal,
    showModal: showAlertModal,
    closeModal: closeAlertModal,
  } = useModal()

  const { setLogin } = useAuthUserStore()

  const AlertModalComponent = isShowAlertModal ? (
    <AlertModal
      isShow={isShowAlertModal}
      alertMessage="이미 가입된 이메일입니다."
      onClose={closeAlertModal}
    />
  ) : null

  const SignupFirstForm_API = useMutation({
    mutationKey: [SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY],
    mutationFn: signup,
    onSuccess: async ({ user, token }) => {
      // authToken.setToken(token)
      setLogin(user, token)
      changeSignupFormComponent()

      const response = await fetch(standard)
      const defaultImageFile = await response.blob()

      const formData = new FormData()
      formData.append("isCover", "false")
      formData.append("image", defaultImageFile, "defaultImage")

      await AUTH_API.post("/users/upload-photo", formData).then((res) => {
        console.log("upload-default photo : ", res.data)
        return res.data
      })
    },
    onError: () => {
      showAlertModal()
    },
  })

  return {
    AlertModalComponent,
    SignupFirstForm_API,
  }
}

export default useSignupFirstForm
