import { useEffect, useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { EditPostState, HandleEditPost } from "./PostEdit.Types"
import getThumbnailByUrl from "@/util/getThumbnailByUrl"
import { useParams } from "react-router-dom"

const PostEdit = () => {
  const { id } = useParams()
  const [editPost, setEditPost] = useState<EditPostState>(
    POST_EDIT_INITIAL_EDIT_POST,
  )
  const [isNewPost, setIsNewPost] = useState(true)

  useEffect(() => {
    if (!id || id === "newPost") {
      return
    }

    setIsNewPost(false)
    console.log(id)
  }, [id])

  const handleEditPost: HandleEditPost = ({ type, value }) => {
    if (type === "mediaUrl") {
      const newEditPost = {
        ...editPost,
        mediaUrl: value,
        thumbnail: getThumbnailByUrl(value),
      }
      setEditPost(newEditPost)
      return
    }

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
        <PostEditEditor
          isNewPost={isNewPost}
          onEdit={handleEditPost}
          postData={editPost}
        />
      </S.PostEditContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
