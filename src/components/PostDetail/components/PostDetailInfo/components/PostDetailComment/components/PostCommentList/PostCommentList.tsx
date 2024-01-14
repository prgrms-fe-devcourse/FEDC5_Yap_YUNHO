import { PostComment } from "@/types"
import * as S from "./PostCommentList.Styles"
import PostCommentItem from "./components/PostCommentItem"
import useDeleteComment from "@/components/PostDetail/hooks/useDeleteComment"

interface PostCommentListProps {
  commentList: PostComment[]
}

const PostCommentList = ({ commentList }: PostCommentListProps) => {
  const { deleteCommentMutation, DeleteCommentAlertModal } = useDeleteComment()

  const handleDeleteComment = (commentId: string) => {
    deleteCommentMutation.mutate(commentId)
  }

  const reversedList = [...commentList].reverse()
  return (
    <>
      <S.PostCommentListLayout>
        {reversedList &&
          reversedList.map((comment) => (
            <PostCommentItem
              key={comment._id}
              comment={comment}
              onDelete={handleDeleteComment}
            />
          ))}
      </S.PostCommentListLayout>

      {DeleteCommentAlertModal}
    </>
  )
}

export default PostCommentList
