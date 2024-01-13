import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useMutation } from "@tanstack/react-query"
import { signup } from "../apis/signup"

const SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY =
  "SIGNUP_FIRST_FORM_MUTATION_QUERY_KEY"

interface UseSignupFirstFormParam {
  changeSignupFormComponent: (authToken: string) => void
}

const useSignupFirstForm = ({
  changeSignupFormComponent,
}: UseSignupFirstFormParam) => {
  const {
    isShowModal: isShowAlertModal,
    showModal: showAlertModal,
    closeModal: closeAlertModal,
  } = useModal()

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
    onSuccess: ({ token }) => {
      changeSignupFormComponent(token)
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
