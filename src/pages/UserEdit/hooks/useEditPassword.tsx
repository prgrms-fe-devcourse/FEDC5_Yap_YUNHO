import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useMutation } from "@tanstack/react-query"
import editPassword from "../apis/editPassword"

const EDIT_PASSWORD_MUTATION_QUERY_KEY = "EDIT_PASSWORD_MUTATION_QUERY_KEY"

const useEditPassword = () => {
  const {
    isShowModal: isShowAlertModal,
    showModal: showAlertModal,
    closeModal: closeAlertModal,
  } = useModal()

  const AlertModalComponent = isShowAlertModal ? (
    <AlertModal
      isShow={isShowAlertModal}
      alertMessage="비밀번호 변경을 다시 시도해주세요"
      onClose={closeAlertModal}
    />
  ) : null

  const EditUserPassword = useMutation({
    mutationKey: [EDIT_PASSWORD_MUTATION_QUERY_KEY],
    mutationFn: editPassword,
    onSuccess: () => {
      return true
    },
    onError: () => {
      showAlertModal()
    },
  })

  return {
    AlertModalComponent,
    EditUserPassword,
  }
}

export default useEditPassword
