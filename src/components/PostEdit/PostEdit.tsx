import { useEffect, useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { EditPostState, HandleEditPost } from "./PostEdit.Types"
import getThumbnailByUrl from "@/util/getThumbnailByUrl"

const PostEdit = () => {
  const [editPost, setEditPost] = useState<EditPostState>(
    POST_EDIT_INITIAL_EDIT_POST,
  )

  useEffect(() => {
    // 해당 모달이 오픈된 시점 - 새 게시물인가? 수정인가?
    // 1. 서브밋 버튼 네이밍 변경 ( 상태 추가 )
  }, [])

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
