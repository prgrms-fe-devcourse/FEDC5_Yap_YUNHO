import PostCard from "@/components/PostCard/PostCard"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import { Post } from "@/types"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"

interface PostDetailViewerProps {
  post: Post
}

const PostDetailViewer = ({ post }: PostDetailViewerProps) => {
  const { isShowEditModal } = usePostEditModalStore()
  const { mediaUrl, content, thumbnail } = post.title
  return (
    <GS.PostModalGlobalViewerLayout>
      <PostCard
        author={post.author}
        hasProfile={false}
        thumbnail={thumbnail}
        content={content}
        mediaUrl={mediaUrl}
        postId={post._id}
        isBlock={isShowEditModal}
      />
    </GS.PostModalGlobalViewerLayout>
  )
}

export default PostDetailViewer
