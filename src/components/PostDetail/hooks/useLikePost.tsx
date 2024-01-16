import { useMutation, useQueryClient } from "@tanstack/react-query"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import { AUTH_API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"

const MUTATION_KEY_LIKE_POST_KEY = "IT_IS_LIKE_MUTATION_KEY_546786723746238"

const useLikePost = () => {
  const { isShowModal, showModal, closeModal } = useModal()
  const { updateUser } = useAuthUserStore()

  const queryClient = useQueryClient()
  const fetchLikeMutate = useMutation({
    mutationKey: [MUTATION_KEY_LIKE_POST_KEY],
    mutationFn: fetchLikePost,
    onSuccess: () => {
      queryClient.refetchQueries()
      AUTH_API.get("/auth-user")
        .then((res) => res.data)
        .then((userData) => updateUser(userData))
    },
    onError: () => {
      showModal()
    },
  })

  const LikeErrorAlertModal = (
    <AlertModal
      isShow={isShowModal}
      alertMessage={POST_DETAIL_ERROR_MESSAGE.POST.LIKE}
      onClose={closeModal}
    />
  )

  return {
    fetchLikeMutate,
    LikeErrorAlertModal,
  }
}

export default useLikePost

const fetchLikePost = async (postId: string) => {
  return await AUTH_API.post("/likes/create", {
    postId,
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
