import { UsePostData } from "@/types"
import { HandleEditPost } from "../../PostEdit.Types"
import { POST_EDIT_EDITOR_PLACEHOLDER } from "../../constants/PostEdit.Constants"
import * as S from "./PostEditEditor.Styles"
import PostEditInput from "./components/PostEditInput/PostEditInput"
import PostEditUrl from "./components/PostEditUrl/PostEditUrl"

interface PostEditEditorProps {
  onEdit: HandleEditPost
  postData: UsePostData
}

const PostEditEditor = ({ onEdit, postData }: PostEditEditorProps) => {
  return (
    <S.PostEditEditorLayout>
      <PostEditUrl />
      <PostEditInput
        text={postData.content}
        onEdit={onEdit}
        placeholder={POST_EDIT_EDITOR_PLACEHOLDER.CONTENT_INPUT}
      />
    </S.PostEditEditorLayout>
  )
}

export default PostEditEditor
