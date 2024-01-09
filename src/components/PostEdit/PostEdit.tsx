import { useEffect, useState } from "react"
import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { EditPostState, HandleEditPost } from "./PostEdit.Types"
import getThumbnailByUrl from "@/util/getThumbnailByUrl"
import { useNavigate, useParams } from "react-router-dom"
import { API } from "@/apis/Api"
import { JSONPost, PostContent } from "@/types"
import PostEditAuthChecker from "./components/PostEditAuthChecker"
import Modal from "../Modal/Modal"

interface PostEditProps {
  onClose: () => void
  isShowModal: boolean
}

const PostEdit = ({ onClose, isShowModal }: PostEditProps) => {
  const { id } = useParams()
  const navigation = useNavigate()
  const [editPost, setEditPost] = useState<EditPostState>(
    POST_EDIT_INITIAL_EDIT_POST,
  )

  useEffect(() => {
    if (!id || id === "newPost") {
      return
    }

    API.get(`/posts/${id}`)
      .then((res) => res.data)
      .then((fetchPost: JSONPost) => {
        const { content, mediaUrl, thumbnail }: PostContent = JSON.parse(
          fetchPost.title,
        )

        setEditPost({
          content: content,
          mediaUrl: mediaUrl,
          thumbnail: thumbnail,
          category: fetchPost.channel._id,
          postId: fetchPost._id,
          authorId: fetchPost.author._id,
        })
      })
  }, [id, isShowModal, navigation])

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
    <Modal
      isShow={isShowModal}
      onClose={onClose}
      clickAwayEnable={false}
    >
      <PostEditAuthChecker
        onCloseInnerModal={onClose}
        authorId={editPost.authorId}
      >
        <S.PostEditLayout>
          <S.PostEditContainer>
            <PostEditViewer postData={editPost} />
          </S.PostEditContainer>
          <S.PostEditBoundary />
          <S.PostEditContainer>
            <PostEditEditor
              onEdit={handleEditPost}
              postData={editPost}
              onClose={onClose}
            />
          </S.PostEditContainer>
        </S.PostEditLayout>
      </PostEditAuthChecker>
    </Modal>
  )
}

export default PostEdit
