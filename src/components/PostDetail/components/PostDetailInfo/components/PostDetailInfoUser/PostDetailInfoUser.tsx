import { Post } from "@/types"
import * as S from "./PostDetailInfoUser.Styles"

interface PostDetailInfoUserProps {
  post: Post
}

const PostDetailInfoUser = ({ post }: PostDetailInfoUserProps) => {
  return (
    <S.PostDetailInfoUserLayout>
      <S.DetailInfoUserProfile src={post.author.image} />
    </S.PostDetailInfoUserLayout>
  )
}

export default PostDetailInfoUser
