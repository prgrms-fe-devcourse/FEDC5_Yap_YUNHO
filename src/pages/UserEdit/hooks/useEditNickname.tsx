import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useMutation } from "@tanstack/react-query"
import editNickname from "../apis/editNickname"

const EDIT_NICKNAME_MUTATION_QUERY_KEY = "EDIT_NICKNAME_MUTATION_QUERY_KEY"

const useEditNickname = () => {
  const {
    isShowModal: isShowAlertModal,
    showModal: showAlertModal,
    closeModal: closeAlertModal,
  } = useModal()

  const AlertModalComponent = isShowAlertModal ? (
    <AlertModal
      isShow={isShowAlertModal}
      alertMessage="닉네임 변경을 다시 시도해주세요"
      onClose={closeAlertModal}
    />
  ) : null

  const EditUserNickname = useMutation({
    mutationKey: [EDIT_NICKNAME_MUTATION_QUERY_KEY],
    mutationFn: editNickname,
    onSuccess: () => {
      return true
    },
    onError: () => {
      showAlertModal()
    },
  })

  return {
    AlertModalComponent,
    EditUserNickname,
  }
}

export default useEditNickname
