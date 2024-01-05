import { POST_EDIT_EDITOR_PLACEHOLDER } from "@/components/PostEdit/constants/PostEdit.Constants"
import * as S from "./PostEditPrompt.Styles"

interface PostEditPromptProps {
  onClose: () => void
  text: string
}

const PostEditPrompt = ({ onClose }: PostEditPromptProps) => {
  return (
    <S.PostEditPromptLayout>
      <S.PostEditPromptTitle>
        등록하실 URL을 입력하신 후 등록 버튼을 눌러주세요!
      </S.PostEditPromptTitle>
      <S.PostEditPromptInput
        placeholder={POST_EDIT_EDITOR_PLACEHOLDER.URL_PROMPT}
      />
      <S.PostEditPromptActions>
        <S.PostEditPromptButton onClick={onClose}>취소</S.PostEditPromptButton>
        <S.PostEditPromptButton>등록</S.PostEditPromptButton>
      </S.PostEditPromptActions>
    </S.PostEditPromptLayout>
  )
}

export default PostEditPrompt
