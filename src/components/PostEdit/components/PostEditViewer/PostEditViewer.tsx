import PostCard from "@/components/PostCard/PostCard"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { PostContent } from "@/types"

interface PostEditViewerProps {
  postData: PostContent
}

const PostEditViewer = ({ postData }: PostEditViewerProps) => {
  const { user } = useAuthUserStore()

  return (
    <GS.PostModalGlobalViewerLayout>
      <PostCard
        authUserProfile={user.image}
        thumbnail={postData.thumbnail}
        content={postData.content}
        mediaUrl={postData.mediaUrl}
      />
    </GS.PostModalGlobalViewerLayout>
  )
}

export default PostEditViewer
