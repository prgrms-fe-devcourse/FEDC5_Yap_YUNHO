import PostCard from "@/components/PostCard/PostCard"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { EditPostState } from "../../PostEdit.Types"

interface PostEditViewerProps {
  postData: EditPostState
}

const PostEditViewer = ({ postData }: PostEditViewerProps) => {
  const { user } = useAuthUserStore()

  return (
    <GS.PostModalGlobalViewerLayout>
      <PostCard
        author={user}
        thumbnail={postData.thumbnail}
        content={postData.content}
        mediaUrl={postData.mediaUrl}
        postId={postData.authorId}
      />
    </GS.PostModalGlobalViewerLayout>
  )
}

export default PostEditViewer
