import { AUTH_API } from "@/apis/Api"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const MUTATION_KEY_UN_LIKE_POST_KEY = "IT_IS_UN_LIKE_MUTATION_KEY_5448718927139"

const useUnLikePost = () => {
  const { isShowModal, showModal, closeModal } = useModal()

  const queryClient = useQueryClient()
  const unlikeMutate = useMutation({
    mutationKey: [MUTATION_KEY_UN_LIKE_POST_KEY],
    mutationFn: fetchUnLikePost,
    onSuccess: () => {
      queryClient.refetchQueries()
    },
    onError: () => {
      showModal()
    },
  })

  const UnLikeErrorAlertModal = isShowModal && (
    <AlertModal
      isShow={isShowModal}
      alertMessage={POST_DETAIL_ERROR_MESSAGE.POST.UNLIKE}
      onClose={closeModal}
    />
  )

  return {
    unlikeMutate,
    UnLikeErrorAlertModal,
  }
}

export default useUnLikePost

const fetchUnLikePost = async (likeId: string) => {
  return await AUTH_API.delete("/likes/delete", {
    data: { id: likeId },
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}
