import PostCard from "@/components/PostCard/PostCard"
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
        // 이 부분은 수정 페이지는 본인의 게시물만 수정 가능하다고 판단했기 때문에 store에서 꺼내왔습니다
        // 해당 주석은 다음 PR에서 제거 예정입니다
        authUserProfile={user.image}
        thumbnail={postData.thumbnail}
        content={postData.content}
        mediaUrl={postData.mediaUrl}
      />
    </S.PostEditViewerLayout>
  )
}

export default PostEditViewer
