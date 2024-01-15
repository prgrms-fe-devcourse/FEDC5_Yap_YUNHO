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
import UserInfoPopover from "@/components/UserInfoPopover/UserInfoPopover"

interface PostCommentItemProps {
  comment: PostComment
  onDelete: (commentId: string) => void
}

register("ko", kolocale)
const PostCommentItem = ({ comment, onDelete }: PostCommentItemProps) => {
  const {
    isShowModal: isShowConfirm,
    showModal: showConfirm,
    closeModal: closeConfirm,
  } = useModal()

  const { user } = useAuthUserStore()
  const { author, createdAt } = comment

  const handleDeleteComment = (isAccept: boolean) => {
    closeConfirm()

    if (isAccept) {
      onDelete(comment._id)
    }
  }

  const isMyComment = author._id === user._id
  const convertedData = format(createdAt, "ko")
  return (
    <>
      <S.PostCommentItemLayout>
        <UserInfoPopover
          user={author}
          isLeft={true}
        >
          <S.PostCommentItemUserProfile $profile={author.image} />
        </UserInfoPopover>
        <S.PostCommentItemContainer>
          <S.PostCommentItemInfo>
            {`${author.fullName}`}
            <AccessTimeIcon />
            {`${convertedData}`}
          </S.PostCommentItemInfo>
          <S.PostCommentItemComment>{comment.comment}</S.PostCommentItemComment>
        </S.PostCommentItemContainer>
        <S.PostCommentItemActions>
          {isMyComment && (
            <S.PostCommentItemButton onClick={showConfirm}>
              <DeleteIcon />
            </S.PostCommentItemButton>
          )}
        </S.PostCommentItemActions>
      </S.PostCommentItemLayout>

      <ConfirmModal
        isShow={isShowConfirm}
        message={POST_DETAIL_MODAL_MESSAGE.CONFIRM.COMMENT_DELETE}
        onClose={handleDeleteComment}
      />
    </>
  )
}

export default PostCommentItem
