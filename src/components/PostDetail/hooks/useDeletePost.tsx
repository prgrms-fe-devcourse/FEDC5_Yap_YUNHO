import { AUTH_API } from "@/apis/Api"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const MUTATION_KEY_DELETE_POST = "IT_IS_DELETE_MUTATION_KEY_41728461278632781"

const useDeletePost = () => {
  const {
    isShowModal: isShowAlert,
    showModal: showAlert,
    closeModal: closeAlert,
  } = useModal()

  const queryClient = useQueryClient()
  const deletePostMutate = useMutation({
    mutationKey: [MUTATION_KEY_DELETE_POST],
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.refetchQueries()
    },
    onError: () => {
      showAlert()
    },
  })

  const DeletePostErrorAlertModal = (
    <AlertModal
      isShow={isShowAlert}
      alertMessage={POST_DETAIL_ERROR_MESSAGE.POST.DELETE}
      onClose={closeAlert}
    />
  )

  return {
    deletePostMutate,
    DeletePostErrorAlertModal,
  }
}

export default useDeletePost

const deletePost = (id: string) => {
  const response = AUTH_API.delete("/posts/delete", {
    data: { id },
  })
    .then((res) => res)
    .catch((e) => {
      throw Error(e)
    })
  return response
}
