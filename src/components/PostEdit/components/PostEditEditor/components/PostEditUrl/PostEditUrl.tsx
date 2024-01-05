import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditUrl.Styles"

interface PostEditUrlProps {
  text: string
  placeholder?: string
  onEdit: HandleEditPost
}

const PostEditUrl = ({ placeholder, text, onEdit }: PostEditUrlProps) => {
  return (
    <S.PostEditUrlLayout>
      <S.PostEditUrlTitle>영상 URL</S.PostEditUrlTitle>
      <S.PostEditUrlInput
        disabled
        value={text}
        placeholder={placeholder}
      />
    </S.PostEditUrlLayout>
  )
}

export default PostEditUrl
