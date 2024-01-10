import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"

interface PostDetailInfoUserProps {
  post: Post
}

const PostDetailUser = ({ post }: PostDetailInfoUserProps) => {
  return (
    <S.PostDetailUserLayout>
      <S.PostDetailUserProfile src={post.author.image} />
    </S.PostDetailUserLayout>
  )
}

export default PostDetailUser
