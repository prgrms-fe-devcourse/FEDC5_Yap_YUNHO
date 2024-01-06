import { useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { PostContent } from "@/types"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { HandleEditPost } from "./PostEdit.Types"

const PostEdit = () => {
  const [editPost, setEditPost] = useState<PostContent>(
    POST_EDIT_INITIAL_EDIT_POST,
  )

  const handleEditPost: HandleEditPost = ({ type, value }) => {
    const newEditPost = {
      ...editPost,
      [type]: value,
    }
    setEditPost(newEditPost)
  }

  console.log(editPost)
  return (
    <S.PostEditLayout>
      <S.PostEditContainer>
        <PostEditViewer postData={editPost} />
      </S.PostEditContainer>
      <S.PostEditBoundary />
      <S.PostEditContainer>
        <PostEditEditor
          onEdit={handleEditPost}
          postData={editPost}
        />
      </S.PostEditContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
