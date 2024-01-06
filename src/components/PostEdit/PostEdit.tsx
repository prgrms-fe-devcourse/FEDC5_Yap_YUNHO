import { useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { UsePostData } from "@/types"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"

const PostEdit = () => {
  const [editPost, setEditPost] = useState<UsePostData>(
    POST_EDIT_INITIAL_EDIT_POST,
  )

  return (
    <S.PostEditLayout>
      <S.PostEditContainer>
        <PostEditViewer postData={editPost} />
      </S.PostEditContainer>
      <S.PostEditBoundary />
      <S.PostEditContainer>
        <PostEditEditor />
      </S.PostEditContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
