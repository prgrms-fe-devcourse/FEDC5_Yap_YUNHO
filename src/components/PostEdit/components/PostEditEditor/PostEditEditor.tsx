import { PostContent } from "@/types"
import { HandleEditPost } from "../../PostEdit.Types"
import * as S from "./PostEditEditor.Styles"
import PostEditInput from "./components/PostEditInput/PostEditInput"
import PostEditUrl from "./components/PostEditUrl/PostEditUrl"
import PostEditCategory from "./components/PostEditCategory/PostEditCategory"

interface PostEditEditorProps {
  onEdit: HandleEditPost
  postData: PostContent
}

const PostEditEditor = ({ onEdit, postData }: PostEditEditorProps) => {
  return (
    <S.PostEditEditorLayout>
      <PostEditUrl
        urlPath={postData.mediaUrl}
        onEdit={onEdit}
      />
      <PostEditInput
        text={postData.content}
        onEdit={onEdit}
      />
      <PostEditCategory onEdit={onEdit} />
    </S.PostEditEditorLayout>
  )
}

export default PostEditEditor
