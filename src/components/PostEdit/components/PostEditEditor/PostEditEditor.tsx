import { UsePostData } from "@/types"
import { HandleEditPost } from "../../PostEdit.Types"
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
      <PostEditUrl
        text={postData.mediaUrl}
        onEdit={onEdit}
      />
      <PostEditInput
        text={postData.content}
        onEdit={onEdit}
      />
    </S.PostEditEditorLayout>
  )
}

export default PostEditEditor
