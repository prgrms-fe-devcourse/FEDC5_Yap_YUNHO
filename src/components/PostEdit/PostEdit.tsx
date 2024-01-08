import { useEffect, useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { EditPostState, HandleEditPost } from "./PostEdit.Types"
import getThumbnailByUrl from "@/util/getThumbnailByUrl"
import { useNavigate, useParams } from "react-router-dom"
import { API } from "@/apis/Api"
import { PostContent } from "@/types"

const PostEdit = () => {
  const { id } = useParams()
  const navigation = useNavigate()
  const [editPost, setEditPost] = useState<EditPostState>(
    POST_EDIT_INITIAL_EDIT_POST,
  )
  const [isNewPost, setIsNewPost] = useState(true)

  useEffect(() => {
    if (!id || id === "newPost") {
      return
    }

    setIsNewPost(false)
    API.get(`/posts/${id}`)
      .then((res) => res.data)
      .then((fetchPost) => {
        const parseData: PostContent = JSON.parse(fetchPost.title)
        setEditPost({
          content: parseData.content,
          mediaUrl: parseData.mediaUrl,
          thumbnail: parseData.thumbnail,
          category: "",
        })
      })
  }, [id, navigation])

  console.log(editPost)

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
    // 검사 프로바이더 씌워야함
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
