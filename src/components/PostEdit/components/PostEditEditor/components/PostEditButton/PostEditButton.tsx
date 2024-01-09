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
        {postData.postId === "newPost" ? "등록 완료" : "수정 완료"}
      </S.PostEditButton>
    </S.PostEditButtonLayout>
  )
}

export default PostEditButton
