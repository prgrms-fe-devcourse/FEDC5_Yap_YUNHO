import { Post, User } from "@/types"
import * as S from "./PostDetailComment.Styles"
import PostCommentInput from "./components/PostCommentInput/PostCommentInput"
import PostCommentList from "./components/PostCommentList/PostCommentList"

interface PostDetailCommentProps {
  post: Post
  authUser: User
}

const PostDetailComment = ({ post, authUser }: PostDetailCommentProps) => {
  console.log(authUser)
  return (
    <S.PostDetailCommentLayout>
      <S.PostDetailCommentInfo>{`댓글 ${post.comments.length} 개`}</S.PostDetailCommentInfo>
      <PostCommentList />
      <PostCommentInput />
    </S.PostDetailCommentLayout>
  )
}

export default PostDetailComment
