import { HandleEditPost } from "../../PostEdit.Types"
import * as S from "./PostEditEditor.Styles"

interface PostEditEditorProps {
  onEdit: HandleEditPost
}

const PostEditEditor = ({ onEdit }: PostEditEditorProps) => {
  return <S.PostEditEditorLayout></S.PostEditEditorLayout>
}

export default PostEditEditor
