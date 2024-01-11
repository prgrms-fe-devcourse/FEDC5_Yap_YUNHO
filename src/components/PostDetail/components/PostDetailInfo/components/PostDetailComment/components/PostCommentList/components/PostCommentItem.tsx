import { PostComment } from "@/types"
import * as S from "./PostCommentItem.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import DeleteIcon from "@mui/icons-material/Delete"
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { format, register } from "timeago.js"
import kolocale from "timeago.js/lib/lang/ko"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"

interface PostCommentItemProps {
  comment: PostComment
  onDelete: (commentId: string) => void
}

const PostCommentItem = ({ comment, onDelete }: PostCommentItemProps) => {
  const {
    isShowModal: isShowConfirm,
    showModal: showConfirm,
    closeModal: closeConfirm,
  } = useModal()
  const { user } = useAuthUserStore()
  register("ko", kolocale)

  const { author, createdAt, updatedAt } = comment

  const isMyComment = author._id === user._id
  const isEditComment = createdAt !== updatedAt
  const convertedData = format(createdAt, "ko")

  const handleDeleteComment = (isAccept: boolean) => {
    if (!isAccept) {
      closeConfirm()
      return
    }
    closeConfirm()
    onDelete(comment._id)
  }
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
            <>
              <S.PostCommentItemButton onClick={showConfirm}>
                <DeleteIcon />
              </S.PostCommentItemButton>
              <S.PostCommentItemButton>
                <ModeEditOutlineIcon />
              </S.PostCommentItemButton>
            </>
          )}
        </S.PostCommentItemActions>
      </S.PostCommentItemLayout>

      <ConfirmModal
        isShow={isShowConfirm}
        message={"정말 삭제하시겠어요?"}
        onClose={handleDeleteComment}
      />
    </>
  )
}

export default PostCommentItem
