import CustomModal from "@/components/Modal/components/CustomModal/CustomModal"
import * as S from "./PostCommentPrompt.styles"
import { ChangeEvent, useState } from "react"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"

interface PostCommentPromptProps {
  isShow: boolean
  initialComment: string
  onClose: () => void
  onClickButton: (editedComment: string) => void
}

const PostCommentPrompt = ({
  isShow,
  initialComment,
  onClose,
}: PostCommentPromptProps) => {
  const [editMessage, setEditMessage] = useState(initialComment)

  const handleChangeEditComment = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setEditMessage(target.value)
  }

  const isErrorMessage = !editMessage.trim()

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
        <S.CommentPromptErrorContainer>
          {isErrorMessage && (
            <S.CommentPromptError>
              {POST_DETAIL_ERROR_MESSAGE.COMMENT_PROMPT.ERROR_COMMENT}
            </S.CommentPromptError>
          )}
        </S.CommentPromptErrorContainer>
        <S.CommentPromptInput
          value={editMessage}
          onChange={handleChangeEditComment}
        />
        <S.CommentPromptActions>
          <S.CommentPromptButton onClick={onClose}>
            {"취소"}
          </S.CommentPromptButton>
          <S.CommentPromptButton>{"수정"}</S.CommentPromptButton>
        </S.CommentPromptActions>
      </S.CommentPromptLayout>
    </CustomModal>
  )
}

export default PostCommentPrompt
