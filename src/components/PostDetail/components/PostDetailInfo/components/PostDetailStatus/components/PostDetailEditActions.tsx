import * as S from "./PostDetailEditActions.Styles"
import { Post } from "@/types"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import useDeletePost from "@/components/PostDetail/hooks/useDeletePost"
import PostEdit from "@/components/PostEdit/PostEdit"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"

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
  const { isShowEditModal, showEditModal } = usePostEditModalStore()

  const { deletePostMutate, DeletePostErrorAlertModal } = useDeletePost()

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
        <S.PostDetailEditButton onClick={showEditModal}>
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
        isShow={isShowComplete}
        alertMessage={POST_DETAIL_MODAL_MESSAGE.COMPLETE.DELETE}
        onClose={onClose}
      />

      {DeletePostErrorAlertModal}
      {isShowEditModal && <PostEdit postId={post._id} />}
    </>
  )
}

export default PostDetailEditActions
