import useModal from "@/components/Modal/hooks/useModal"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { signupUploadPhoto } from "../apis/signupUploadPhoto"
import { useMutation } from "@tanstack/react-query"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

const SIGNUP_SECOND_FORM_MUTATION_QUERY_KEY =
  "SIGNUP_SECOND_FORM_MUTATION_QUERY_KEY"

const useSignupSecondForm = () => {
  const { setLogin } = useAuthUserStore()

  const {
    isShowModal: isShowAlertModal,
    showModal: showAlertModal,
    closeModal: closeAlertModal,
  } = useModal()

  const AlertModalComponent = isShowAlertModal ? (
    <AlertModal
      isShow={isShowAlertModal}
      alertMessage="프로필 이미지 등록 실패"
      onClose={closeAlertModal}
    />
  ) : null

  const SignupSecondForm_API = useMutation({
    mutationKey: [SIGNUP_SECOND_FORM_MUTATION_QUERY_KEY],
    mutationFn: signupUploadPhoto,
    onSuccess: ({ user, userToken }) => {
      setLogin(user, userToken)
    },
    onError: () => {
      showAlertModal()
    },
  })

  return {
    AlertModalComponent,
    SignupSecondForm_API,
  }
}

export default useSignupSecondForm
