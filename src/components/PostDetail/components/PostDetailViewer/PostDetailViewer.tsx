import PostCard from "@/components/PostCard/PostCard"
import * as S from "./PostDetailViewer.Styles"
import { Post } from "@/types"

interface PostDetailViewerProps {
  post: Post
}

const PostDetailViewer = ({ post }: PostDetailViewerProps) => {
  return (
    <S.PostDetailViewerLayout>
      <PostCard
        authUserProfile=""
        isNoneProfile={true}
        thumbnail=""
        content=""
        mediaUrl=""
      />
    </S.PostDetailViewerLayout>
  )
}

export default PostDetailViewer
