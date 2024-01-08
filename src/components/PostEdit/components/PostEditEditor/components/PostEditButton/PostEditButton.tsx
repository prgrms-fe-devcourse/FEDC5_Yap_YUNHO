import * as S from "./PostEditButton.Styles"

interface PostEditButtonProps {
  onSubmit: () => void
}

const PostEditButton = ({ onSubmit }: PostEditButtonProps) => {
  return (
    <S.PostEditButtonLayout>
      <S.PostEditButton onClick={onSubmit}>수정</S.PostEditButton>
    </S.PostEditButtonLayout>
  )
}

export default PostEditButton
