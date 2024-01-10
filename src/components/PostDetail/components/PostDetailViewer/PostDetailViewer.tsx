import PostCard from "@/components/PostCard/PostCard"
import * as S from "./PostDetailViewer.Styles"
import { Post } from "@/types"

interface PostDetailViewerProps {
  post: Post
}

const PostDetailViewer = ({ post }: PostDetailViewerProps) => {
  const { mediaUrl, content, thumbnail } = post.title
  return (
    <S.PostDetailViewerLayout>
      <PostCard
        authUserProfile=""
        isNoneProfile={true}
        thumbnail={thumbnail}
        content={content}
        mediaUrl={mediaUrl}
      />
    </S.PostDetailViewerLayout>
  )
}

export default PostDetailViewer
