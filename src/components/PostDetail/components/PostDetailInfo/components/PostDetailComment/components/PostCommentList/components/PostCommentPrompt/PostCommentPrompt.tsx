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
    >
      <S.PostCommentPromptLayout></S.PostCommentPromptLayout>
    </CustomModal>
  )
}

export default PostCommentPrompt
