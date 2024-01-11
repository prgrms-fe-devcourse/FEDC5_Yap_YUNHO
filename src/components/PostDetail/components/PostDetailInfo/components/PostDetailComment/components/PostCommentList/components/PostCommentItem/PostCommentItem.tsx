import { PostComment } from "@/types"
import * as S from "./PostCommentItem.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import DeleteIcon from "@mui/icons-material/Delete"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { format, register } from "timeago.js"
import kolocale from "timeago.js/lib/lang/ko"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"

interface PostCommentItemProps {
  comment: PostComment
  onDelete: (commentId: string) => void
}

register("ko", kolocale)
const PostCommentItem = ({ comment, onDelete }: PostCommentItemProps) => {
  const {
    isShowModal: isShowDeleteConfirm,
    showModal: showDeleteConfirm,
    closeModal: closeDeleteConfirm,
  } = useModal()

  const { user } = useAuthUserStore()
  const { author, createdAt, updatedAt } = comment

  const handleDeleteComment = (isAccept: boolean) => {
    if (!isAccept) {
      closeDeleteConfirm()
      return
    }
    closeDeleteConfirm()
    onDelete(comment._id)
  }

  const isMyComment = author._id === user._id
  const isEditComment = createdAt !== updatedAt
  const convertedData = format(createdAt, "ko")
  return (
    <>
      <S.PostCommentItemLayout>
        <S.PostCommentItemUserProfile $profile={author.image} />
        <S.PostCommentItemContainer>
          <S.PostCommentItemInfo>
            {`${author.fullName}`}
            <AccessTimeIcon />
            {`${convertedData}`}
            {!isEditComment && <strong>편집됨</strong>}
          </S.PostCommentItemInfo>
          <S.PostCommentItemComment>{comment.comment}</S.PostCommentItemComment>
        </S.PostCommentItemContainer>
        <S.PostCommentItemActions>
          {isMyComment && (
            <S.PostCommentItemButton onClick={showDeleteConfirm}>
              <DeleteIcon />
            </S.PostCommentItemButton>
          )}
        </S.PostCommentItemActions>
      </S.PostCommentItemLayout>

      <ConfirmModal
        isShow={isShowDeleteConfirm}
        message={POST_DETAIL_MODAL_MESSAGE.CONFIRM.COMMENT_DELETE}
        onClose={handleDeleteComment}
      />
    </>
  )
}

export default PostCommentItem
