import useModal from "@/components/Modal/hooks/useModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { EditPostState } from "../PostEdit.Types"
import { AUTH_API } from "@/apis/Api"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

const MUTATION_KEY_UPDATE_POST = "IT_IS_UPDATE_KEY_12361278467821"

const useUpdatePost = () => {
  const { isShowModal, showModal, closeModal } = useModal()

  const queryClient = useQueryClient()
  const updatePostMutate = useMutation({
    mutationKey: [MUTATION_KEY_UPDATE_POST],
    mutationFn: fetchUpdatePost,
    onSuccess: () => {
      queryClient.refetchQueries()
    },
    onError: () => {
      showModal()
    },
  })

  const UpdatePostErrorAlertModal = (
    <AlertModal
      isShow={isShowModal}
      alertMessage={POST_EDIT_ERROR_MESSAGE.POST_SUBMIT.UPDATE_POST}
      onClose={closeModal}
    />
  )
  return {
    updatePostMutate,
    UpdatePostErrorAlertModal,
  }
}

export default useUpdatePost

const fetchUpdatePost = async (updatedData: EditPostState) => {
  const updatedPostBody = {
    title: JSON.stringify({
      mediaUrl: updatedData.mediaUrl,
      thumbnail: updatedData.thumbnail,
      content: updatedData.content,
    }),
    postId: updatedData.postId,
    image: null,
    channelId: updatedData.category,
  }

  return await AUTH_API.put("/posts/update", updatedPostBody)
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
