import PostCard from "@/components/PostCard/Postcard"
import * as S from "./PostEditViewer.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { PostContent } from "@/types"

interface PostEditViewerProps {
  postData: PostContent
}

const PostEditViewer = ({ postData }: PostEditViewerProps) => {
  const { user } = useAuthUserStore()

  return (
    <S.PostEditViewerLayout>
      <PostCard
        authUserProfile={user.image}
        thumbnail={postData.thumbnail}
        content={postData.content}
        mediaUrl={postData.mediaUrl}
      />
    </S.PostEditViewerLayout>
  )
}

export default PostEditViewer
