import { Post } from "@/types"
import * as S from "./PostDetailComment.Styles"
import PostCommentInput from "./components/PostCommentInput/PostCommentInput"
import PostCommentList from "./components/PostCommentList/PostCommentList"

interface PostDetailCommentProps {
  post: Post
}

const PostDetailComment = ({ post }: PostDetailCommentProps) => {
  return (
    <S.PostDetailCommentLayout>
      <S.PostDetailCommentInfo>{`댓글 ${post.comments.length} 개`}</S.PostDetailCommentInfo>
      <PostCommentList commentList={post.comments} />
      <PostCommentInput post={post} />
    </S.PostDetailCommentLayout>
  )
}

export default PostDetailComment
