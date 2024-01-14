import { useEffect, useState } from "react"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"
import { POST_EDIT_INITIAL_EDIT_POST } from "./constants/PostEdit.Constants"
import { EditPostState, HandleEditPost } from "./PostEdit.Types"
import getThumbnailByUrl from "@/util/getThumbnailByUrl"
import { useParams } from "react-router-dom"
import { API } from "@/apis/Api"
import { JSONPost, PostContent } from "@/types"
import PostEditAuthChecker from "./components/PostEditAuthChecker"
import Modal from "../Modal/Modal"
import usePostEditModalStore from "./stores/usePostEditModalStore"

interface PostEditProps {
  onClose: () => void
}

const PostEdit = ({ onClose }: PostEditProps) => {
  const { id } = useParams()
  const { isShowEditModal } = usePostEditModalStore()
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
  }, [id, isShowEditModal])

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
      isShow={isShowEditModal}
      onClose={onClose}
      clickAwayEnable={false}
    >
      <PostEditAuthChecker
        onCloseInnerModal={onClose}
        authorId={editPost.authorId}
      >
        <GS.PostModalGlobalLayout>
          <GS.PostModalGlobalContainer>
            <PostEditViewer postData={editPost} />
          </GS.PostModalGlobalContainer>
          <GS.PostModalGlobalBoundary />
          <GS.PostModalGlobalContainer>
            <PostEditEditor
              onEdit={handleEditPost}
              postData={editPost}
              onClose={onClose}
            />
          </GS.PostModalGlobalContainer>
        </GS.PostModalGlobalLayout>
      </PostEditAuthChecker>
    </Modal>
  )
}

export default PostEdit
