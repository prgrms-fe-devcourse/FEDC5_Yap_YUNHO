import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditInput.Styles"
import { ChangeEvent } from "react"
interface PostEditInputProps {
  text: string
  placeholder?: string
  onEdit: HandleEditPost
}

const PostEditInput = ({ text, placeholder, onEdit }: PostEditInputProps) => {
  const handleChangeInput = ({ target }: ChangeEvent) => {
    if (!(target instanceof HTMLTextAreaElement)) {
      return
    }
    onEdit({
      type: "content",
      value: target.value,
    })
  }

  return (
    <S.PostEditInputLayout>
      <S.PostEditInputTitle>제목</S.PostEditInputTitle>
      <S.PostEditInput
        value={text}
        placeholder={placeholder}
        onChange={handleChangeInput}
      />
    </S.PostEditInputLayout>
  )
}

export default PostEditInput
