import * as S from "./PostEditButton.Styles"

interface PostEditButtonProps {
  isNewPost: boolean
  onSubmit: () => void
}

const PostEditButton = ({ onSubmit, isNewPost }: PostEditButtonProps) => {
  return (
    <S.PostEditButtonLayout>
      <S.PostEditButton onClick={onSubmit}>
        {isNewPost ? "등록" : "수정"}
      </S.PostEditButton>
    </S.PostEditButtonLayout>
  )
}

export default PostEditButton
