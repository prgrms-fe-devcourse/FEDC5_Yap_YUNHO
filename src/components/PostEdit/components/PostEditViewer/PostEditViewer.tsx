import PostCard from "@/components/PostCard/PostCard"
import * as S from "./PostEditViewer.Styles"
import { UsePostData } from "@/types"

interface PostEditViewerProps {
  postData: UsePostData
}

const PostEditViewer = ({ postData }: PostEditViewerProps) => {
  return (
    <S.PostEditViewerLayout>
      <PostCard
        authUserProfile={postData.authUserProfile}
        thumbnail={postData.thumbnail}
        content={postData.content}
        mediaUrl={postData.mediaUrl}
      />
    </S.PostEditViewerLayout>
  )
}

export default PostEditViewer
