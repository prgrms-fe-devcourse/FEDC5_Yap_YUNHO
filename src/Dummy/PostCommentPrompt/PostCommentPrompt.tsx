import CustomModal from "@/components/Modal/components/CustomModal/CustomModal"
import * as S from "./PostCommentPrompt.styles"
import { ChangeEvent, useState } from "react"
import commentValidation from "../../components/PostDetail/components/PostDetailInfo/components/PostDetailComment/components/PostCommentInput/util/commentValidation"

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
  onClickButton,
}: PostCommentPromptProps) => {
  const [editMessage, setEditMessage] = useState(initialComment)
  const isErrorMessage = !commentValidation(editMessage)
  const handleChangeEditComment = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setEditMessage(target.value)
  }

  const handleCompletedComment = () => {
    if (isErrorMessage) {
      return
    }

    onClose()
    onClickButton(editMessage)
  }

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
              {"미사용으로 사용시 해당 부분의 멘트를 붙여주세요"}
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
          <S.CommentPromptButton
            disabled={isErrorMessage}
            onClick={handleCompletedComment}
          >
            {"수정"}
          </S.CommentPromptButton>
        </S.CommentPromptActions>
      </S.CommentPromptLayout>
    </CustomModal>
  )
}

export default PostCommentPrompt
