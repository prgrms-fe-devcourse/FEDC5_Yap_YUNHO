import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"

interface PostDetailInfoUserProps {
  post: Post
}

const PostDetailUser = ({ post }: PostDetailInfoUserProps) => {
  console.log(post)
  return (
    <S.PostDetailUserLayout>
      <S.PostDetailUserProfile
        $src={"https://i1.ytimg.com/vi/W_MUcyXz3r4/sddefault.jpg"}
      />
    </S.PostDetailUserLayout>
  )
}

export default PostDetailUser
