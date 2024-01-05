import { useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { UsePostData } from "@/types"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { HandleEditPost } from "./PostEdit.Types"

const PostEdit = () => {
  const [editPost, setEditPost] = useState<UsePostData>(
    POST_EDIT_INITIAL_EDIT_POST,
  )

  const handleEditPost: HandleEditPost = ({ type, value }) => {
    const newEditPost = {
      ...editPost,
      [type]: value,
    }
    setEditPost(newEditPost)
  }

  return (
    <S.PostEditLayout>
      <S.PostEditContainer>
        <PostEditViewer postData={editPost} />
      </S.PostEditContainer>
      <S.PostEditBoundary />
      <S.PostEditContainer>
        <PostEditEditor onEdit={handleEditPost} />
      </S.PostEditContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
