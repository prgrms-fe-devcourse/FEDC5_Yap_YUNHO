import * as S from "./PostDetailInfo.Styles"
import { Post } from "@/types"
import PostDetailUser from "./components/PostDetailUser/PostDetailUser"
import PostDetailStatus from "./components/PostDetailStatus/PostDetailStatus"
import PostDetailComment from "./components/PostDetailComment/PostDetailComment"
import useAuthUserStore from "@/stores/useAuthUserStore"

interface PostDetailInfoProps {
  onClose: () => void
  post: Post
}

const PostDetailInfo = ({ onClose, post }: PostDetailInfoProps) => {
  const { user } = useAuthUserStore()
  const isMyPost = user._id === post.author._id
  console.log(onClose)

  return (
    <S.PostDetailInfoLayout>
      <PostDetailUser
        post={post}
        isMyPost={isMyPost}
      />
      <S.PostDetailInfoBoundary />
      <PostDetailStatus />
      <S.PostDetailInfoBoundary />
      <PostDetailComment />
    </S.PostDetailInfoLayout>
  )
}

export default PostDetailInfo
