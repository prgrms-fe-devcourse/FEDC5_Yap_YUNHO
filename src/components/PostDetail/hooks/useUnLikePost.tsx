import { AUTH_API } from "@/apis/Api"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { Like } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const MUTATION_KEY_UN_LIKE_POST_KEY = "IT_IS_UN_LIKE_MUTATION_KEY_5448718927139"

const useUnLikePost = () => {
  const { isShowModal, showModal, closeModal } = useModal()
  const { user, updateUser } = useAuthUserStore()

  const queryClient = useQueryClient()
  const fetchUnlikeMutate = useMutation({
    mutationKey: [MUTATION_KEY_UN_LIKE_POST_KEY],
    mutationFn: fetchUnLikePost,
    onSuccess: (data) => {
      queryClient.refetchQueries()
      const newLikes = user.likes.filter((like: Like) => like._id !== data._id)
      updateUser({
        ...user,
        likes: newLikes,
      })
    },
    onError: () => {
      showModal()
    },
  })

  const UnLikeErrorAlertModal = (
    <AlertModal
      isShow={isShowModal}
      alertMessage={POST_DETAIL_ERROR_MESSAGE.POST.UNLIKE}
      onClose={closeModal}
    />
  )

  return {
    fetchUnlikeMutate,
    UnLikeErrorAlertModal,
  }
}

export default useUnLikePost

const fetchUnLikePost = async (likeId: string) => {
  return await AUTH_API.delete("/likes/delete", {
    data: { id: likeId },
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
