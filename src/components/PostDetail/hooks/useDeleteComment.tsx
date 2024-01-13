import { AUTH_API } from "@/apis/Api"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

const COMMENT_DELETE_MUTATION_KEY =
  "IT_IS_DELETE_MUTATION_KEY_672532461414612689"

const useDeleteComment = () => {
  const {
    isShowModal: isShowAlert,
    showModal: showAlert,
    closeModal: closeAlert,
  } = useModal()
  const [alertMessage, setAlertMessage] = useState("")

  const queryClient = useQueryClient()
  const deleteCommentMutation = useMutation({
    mutationKey: [COMMENT_DELETE_MUTATION_KEY],
    mutationFn: fetchDeleteComment,
    onSuccess: () => {
      queryClient.refetchQueries()
      setAlertMessage(POST_DETAIL_MODAL_MESSAGE.COMPLETE.COMMENT_DELETE)
      showAlert()
    },
    onError: () => {
      setAlertMessage(POST_DETAIL_ERROR_MESSAGE.COMMENT.DELETE)
      showAlert()
    },
  })

  const DeleteCommentAlertModal = (
    <AlertModal
      alertMessage={alertMessage}
      isShow={isShowAlert}
      onClose={closeAlert}
    />
  )

  return {
    deleteCommentMutation,
    DeleteCommentAlertModal,
  }
}

export default useDeleteComment

const fetchDeleteComment = async (commentId: string) => {
  return await AUTH_API.delete("/comments/delete", {
    data: { id: commentId },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw Error(error)
    })
}
