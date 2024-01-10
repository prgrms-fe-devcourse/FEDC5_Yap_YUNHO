import * as S from "./PostDetailInfo.Styles"
import { Post } from "@/types"
import PostDetailInfoUser from "./components/PostDetailInfoUser/PostDetailInfoUser"
import PostDetailInfoStatus from "./components/PostDetailInfoStatus/PostDetailInfoStatus"
import PostDetailInfoComment from "./components/PostDetailInfoComment/PostDetailInfoComment"

interface PostDetailInfoProps {
  onClose: () => void
  post: Post
}

const PostDetailInfo = ({ onClose, post }: PostDetailInfoProps) => {
  console.log(post, onClose)
  return (
    <S.PostDetailInfoLayout>
      <PostDetailInfoUser />
      <PostDetailInfoStatus />
      <PostDetailInfoComment />
    </S.PostDetailInfoLayout>
  )
}

export default PostDetailInfo
