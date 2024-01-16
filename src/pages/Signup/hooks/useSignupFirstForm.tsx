import { useMutation } from "@tanstack/react-query"
import { signup } from "../apis/signup"
import useAuthUserStore from "@/stores/useAuthUserStore"
import standard from "@/assets/standard.jpeg"
import { AUTH_API } from "@/apis/Api"

const SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY =
  "SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY"

interface UseSignupFirstFormParam {
  handleChangeForm: () => void
  changeAlertMessage: (message: string) => void
  showModal: () => void
}

const useSignupFirstForm = ({
  handleChangeForm,
  changeAlertMessage,
  showModal,
}: UseSignupFirstFormParam) => {
  const { setLogin } = useAuthUserStore()

  const SignupFirstForm_API = useMutation({
    mutationKey: [SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY],
    mutationFn: signup,
    onMutate: () => {
      handleChangeForm()
    },
    onSuccess: async ({ user, token }) => {
      setLogin(user, token)

      const response = await fetch(standard)
      const defaultImageFile = await response.blob()

      const formData = new FormData()
      formData.append("isCover", "false")
      formData.append("image", defaultImageFile, "defaultImage")

      await AUTH_API.post("/users/upload-photo", formData).then((res) => {
        return res.data
      })
    },
    onError: (e) => {
      const USED_EMAIL_ERROR =
        e.message === "The email address is already being used."

      if (USED_EMAIL_ERROR) {
        changeAlertMessage("이미 가입된 이메일입니다.")
        showModal()
        return
      }
      changeAlertMessage("일반 오류")
      showModal()
      return
    },
  })

  return {
    SignupFirstForm_API,
  }
}

export default useSignupFirstForm
