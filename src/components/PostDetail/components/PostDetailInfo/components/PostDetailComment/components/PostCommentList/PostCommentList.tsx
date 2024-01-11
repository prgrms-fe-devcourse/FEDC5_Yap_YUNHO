import { PostComment } from "@/types"
import * as S from "./PostCommentList.Styles"
import PostCommentItem from "./components/PostCommentItem"

interface PostCommentListProps {
  commentList: PostComment[]
}

const PostCommentList = ({ commentList }: PostCommentListProps) => {
  console.log(commentList.reverse())
  return (
    <S.PostCommentListLayout>
      {commentList &&
        commentList.map((comment) => (
          <PostCommentItem
            key={comment._id}
            comment={comment}
          />
        ))}
    </S.PostCommentListLayout>
  )
}

export default PostCommentList
