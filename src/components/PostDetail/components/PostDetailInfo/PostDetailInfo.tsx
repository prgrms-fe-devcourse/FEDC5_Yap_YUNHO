import * as S from "./PostDetailInfo.Styles"
import { Post } from "@/types"
import PostDetailUser from "./components/PostDetailUser/PostDetailUser"
import PostDetailStatus from "./components/PostDetailStatus/PostDetailStatus"
import PostDetailComment from "./components/PostDetailComment/PostDetailComment"

interface PostDetailInfoProps {
  onClose: () => void
  post: Post
}

const PostDetailInfo = ({ onClose, post }: PostDetailInfoProps) => {
  console.log(onClose)

  return (
    <S.PostDetailInfoLayout>
      <PostDetailUser post={post} />
      <S.PostDetailInfoBoundary />
      <PostDetailStatus />
      <S.PostDetailInfoBoundary />
      <PostDetailComment />
    </S.PostDetailInfoLayout>
  )
}

export default PostDetailInfo
