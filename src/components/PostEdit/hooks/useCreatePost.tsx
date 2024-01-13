import { useMutation, useQueryClient } from "@tanstack/react-query"
import { EditPostState } from "../PostEdit.Types"
import { AUTH_API } from "@/apis/Api"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

const MUTATION_KEY_CREATE_POST = "IT_IS_CREATE_KEY_64895712389571"

const useCreatePost = () => {
  const { isShowModal, showModal, closeModal } = useModal()

  const queryClient = useQueryClient()
  const createPostMutate = useMutation({
    mutationKey: [MUTATION_KEY_CREATE_POST],
    mutationFn: fetchCreatePost,
    onSuccess: () => {
      queryClient.refetchQueries()
    },
    onError: () => {
      showModal()
    },
  })

  const CreatePostErrorAlertModal = (
    <AlertModal
      isShow={isShowModal}
      alertMessage={POST_EDIT_ERROR_MESSAGE.POST_SUBMIT.NEW_POST}
      onClose={closeModal}
    />
  )

  return {
    createPostMutate,
    CreatePostErrorAlertModal,
  }
}

export default useCreatePost

const fetchCreatePost = async (newPost: EditPostState) => {
  const newPostBody = {
    title: JSON.stringify({
      mediaUrl: newPost.mediaUrl,
      thumbnail: newPost.thumbnail,
      content: newPost.content,
    }),
    image: null,
    channelId: newPost.category,
  }

  return await AUTH_API.post("/posts/create", newPostBody)
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
