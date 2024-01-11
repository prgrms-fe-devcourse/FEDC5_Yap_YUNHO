import CustomModal from "@/components/Modal/components/CustomModal/CustomModal"
import * as S from "./PostCommentPrompt.styles"

interface PostCommentPromptProps {
  isShow: boolean
  onClose: () => void
  onClickButton: (editedComment: string) => void
}

const PostCommentPrompt = ({ isShow, onClose }: PostCommentPromptProps) => {
  return (
    <CustomModal
      isShow={isShow}
      onClickAway={onClose}
      $height={25}
    >
      <S.CommentPromptLayout>
        <S.CommentPromptTitle>
          {"수정하실 내용을 입력 해 주세요!"}
        </S.CommentPromptTitle>
        <S.CommentPromptInput />
        <S.CommentPromptActions>
          <S.CommentPromptButton>{"취소"}</S.CommentPromptButton>
          <S.CommentPromptButton>{"수정"}</S.CommentPromptButton>
        </S.CommentPromptActions>
      </S.CommentPromptLayout>
    </CustomModal>
  )
}

export default PostCommentPrompt
