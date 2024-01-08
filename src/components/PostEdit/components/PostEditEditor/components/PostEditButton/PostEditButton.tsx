import { EditPostState } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditButton.Styles"

interface PostEditButtonProps {
  postData: EditPostState
  onSubmit: () => void
}

const PostEditButton = ({ onSubmit, postData }: PostEditButtonProps) => {
  return (
    <S.PostEditButtonLayout>
      <S.PostEditButton onClick={onSubmit}>
        {postData.postId === "newPost" ? "등록" : "수정"}
      </S.PostEditButton>
    </S.PostEditButtonLayout>
  )
}

export default PostEditButton
