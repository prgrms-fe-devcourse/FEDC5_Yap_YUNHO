import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useMutation } from "@tanstack/react-query"
import editUserProfileImage from "../apis/editUserProfileImage"
import useAuthUserStore from "@/stores/useAuthUserStore"

const EDIT_USER_PROFILE_IMAGE_MUTATION_QUERY_KEY =
  "EDIT_USER_PROFILE_IMAGE_MUTATION_QUERY_KEY"

interface UseEditUserProfileImage {
  setIsEditUserProfileImageSuccess: React.Dispatch<
    React.SetStateAction<boolean>
  >
}

const useEditUserProfileImage = ({
  setIsEditUserProfileImageSuccess,
}: UseEditUserProfileImage) => {
  const { updateUser } = useAuthUserStore()
  const {
    isShowModal: isShowAlertModal,
    showModal: showAlertModal,
    closeModal: closeAlertModal,
  } = useModal()

  const AlertModalComponent = isShowAlertModal ? (
    <AlertModal
      isShow={isShowAlertModal}
      alertMessage="프로필 이미지 변경을 다시 시도해주세요"
      onClose={closeAlertModal}
    />
  ) : null

  const EditUserProfileImage = useMutation({
    mutationKey: [EDIT_USER_PROFILE_IMAGE_MUTATION_QUERY_KEY],
    mutationFn: editUserProfileImage,
    onSuccess: (user) => {
      updateUser(user)
      setIsEditUserProfileImageSuccess(true)
    },
    onError: () => {
      showAlertModal()
      setIsEditUserProfileImageSuccess(false)
      return
    },
  })

  return {
    AlertModalComponent,
    EditUserProfileImage,
  }
}

export default useEditUserProfileImage
