import * as S from "./PostDetailEditActions.Styles"
import { Post } from "@/types"
import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import deletePost from "@/components/PostDetail/apis/deletePost"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"

const MUTATION_KEY_DELETE_POST = "IT_IS_DELETE_MUTATION_KEY_41728461278632781"

interface PostDetailEditActionsProps {
  onClose: () => void
  post: Post
}

const PostDetailEditActions = ({
  onClose,
  post,
}: PostDetailEditActionsProps) => {
  const {
    isShowModal: isShowConfirm,
    showModal: showConfirm,
    closeModal: closeConfirm,
  } = useModal()
  const {
    isShowModal: isShowAlert,
    showModal: showAlert,
    closeModal: closeAlert,
  } = useModal()
  const { isShowModal: isShowComplete, showModal: showComplete } = useModal()

  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const updateMutate = useMutation({
    mutationKey: [MUTATION_KEY_DELETE_POST],
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.refetchQueries()
      showComplete()
    },
    onError: () => {
      showAlert()
    },
  })

  const handleClickEditButton = () => {
    onClose()
    navigate(`/postedit/${post._id}`)
  }

  const handleConfirmDeletePost = (response: boolean) => {
    if (!response) {
      return closeConfirm()
    }

    updateMutate.mutate(post._id)
    closeConfirm()
  }

  const handleCompleteDelete = () => {
    onClose()
    navigate(`/`)
  }

  return (
    <>
      <S.PostDetailEditActions>
        <S.PostDetailEditButton onClick={handleClickEditButton}>
          {"수정"}
        </S.PostDetailEditButton>
        <S.PostDetailEditButton onClick={showConfirm}>
          {"삭제"}
        </S.PostDetailEditButton>
      </S.PostDetailEditActions>

      <ConfirmModal
        isShow={isShowConfirm}
        onClose={handleConfirmDeletePost}
        message={POST_DETAIL_MODAL_MESSAGE.CONFIRM.DELETE}
      />

      <AlertModal
        isShow={isShowAlert}
        alertMessage={POST_DETAIL_ERROR_MESSAGE.POST.DELETE}
        onClose={closeAlert}
      />

      <AlertModal
        isShow={isShowComplete}
        alertMessage={POST_DETAIL_MODAL_MESSAGE.COMPLETE.DELETE}
        onClose={handleCompleteDelete}
      />
    </>
  )
}

export default PostDetailEditActions
