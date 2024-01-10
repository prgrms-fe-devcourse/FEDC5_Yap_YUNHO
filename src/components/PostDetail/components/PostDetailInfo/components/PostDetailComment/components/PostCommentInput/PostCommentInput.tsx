import * as S from "./PostCommentInput.Styles"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

const PostCommentInput = () => {
  return (
    <S.PostCommentInputLayout>
      <S.PostCommentAuthUserProfile $authUserImage={""} />
      <S.PostCommentInputContainer>
        <S.PostCommentInput type="text" />
        <S.PostCommentButton>
          <ArrowUpwardIcon />
        </S.PostCommentButton>
      </S.PostCommentInputContainer>
    </S.PostCommentInputLayout>
  )
}

export default PostCommentInput
