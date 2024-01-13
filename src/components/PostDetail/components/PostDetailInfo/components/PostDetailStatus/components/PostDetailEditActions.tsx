import * as S from "./PostDetailEditActions.Styles"
import { Post } from "@/types"
import { useNavigate } from "react-router-dom"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import useDeletePost from "@/components/PostDetail/hooks/useDeletePost"

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
  const { isShowModal: isShowComplete, showModal: showComplete } = useModal()

  const { deletePostMutate, DeletePostErrorAlertModal } = useDeletePost()
  const navigate = useNavigate()

  const handleClickEditButton = () => {
    onClose()
    navigate(`/postedit/${post._id}`)
  }

  const handleConfirmDeletePost = (response: boolean) => {
    if (!response) {
      return closeConfirm()
    }

    deletePostMutate.mutate(post._id, {
      onSuccess: () => {
        showComplete()
      },
    })
    closeConfirm()
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

      {isShowConfirm && (
        <ConfirmModal
          isShow={isShowConfirm}
          onClose={handleConfirmDeletePost}
          message={POST_DETAIL_MODAL_MESSAGE.CONFIRM.DELETE}
        />
      )}

      {isShowComplete && (
        <AlertModal
          isShow={isShowComplete}
          alertMessage={POST_DETAIL_MODAL_MESSAGE.COMPLETE.DELETE}
          onClose={onClose}
        />
      )}

      {DeletePostErrorAlertModal}
    </>
  )
}

export default PostDetailEditActions
