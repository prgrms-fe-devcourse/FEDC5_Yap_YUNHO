import { PostComment } from "@/types"
import * as S from "./PostCommentItem.Styles"

interface PostCommentItemProps {
  comment: PostComment
}

const PostCommentItem = ({ comment }: PostCommentItemProps) => {
  return (
    <S.PostCommentItemLayout>
      <S.PostCommentItemUserProfile $profile={comment.author.image} />
    </S.PostCommentItemLayout>
  )
}

export default PostCommentItem
