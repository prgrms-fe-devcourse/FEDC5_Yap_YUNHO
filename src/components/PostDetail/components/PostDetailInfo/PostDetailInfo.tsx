import * as S from "./PostDetailInfo.Styles"
import { Post } from "@/types"

interface PostDetailInfoProps {
  onClose: () => void
  post: Post
}

const PostDetailInfo = ({ onClose, post }: PostDetailInfoProps) => {
  console.log(post, onClose)
  return <S.PostDetailInfoLayout></S.PostDetailInfoLayout>
}

export default PostDetailInfo
