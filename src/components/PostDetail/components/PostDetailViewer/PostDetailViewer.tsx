import PostCard from "@/components/PostCard/PostCard"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import { Post } from "@/types"

interface PostDetailViewerProps {
  post: Post
}

const PostDetailViewer = ({ post }: PostDetailViewerProps) => {
  const { mediaUrl, content, thumbnail } = post.title
  return (
    <GS.PostModalGlobalViewerLayout>
      <PostCard
        hasProfile={false}
        thumbnail={thumbnail}
        content={content}
        mediaUrl={mediaUrl}
        postId={post._id}
      />
    </GS.PostModalGlobalViewerLayout>
  )
}

export default PostDetailViewer