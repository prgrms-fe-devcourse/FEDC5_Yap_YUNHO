import { useMutation } from "@tanstack/react-query"
import editUserProfileImage from "../apis/editUserProfileImage"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { USER_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

const EDIT_USER_PROFILE_IMAGE_MUTATION_QUERY_KEY =
  "EDIT_USER_PROFILE_IMAGE_MUTATION_QUERY_KEY"

const useEditUserProfileImage = () => {
  const { updateUser } = useAuthUserStore()

  const EditUserProfileImage = useMutation({
    mutationKey: [EDIT_USER_PROFILE_IMAGE_MUTATION_QUERY_KEY],
    mutationFn: editUserProfileImage,
    onSuccess: (user) => {
      updateUser(user)
    },
    onError: () => {},
  })

  return {
    EditUserProfileImage,
  }
}

export default useEditUserProfileImage
