import { EditPostState, HandleEditPost } from "../../PostEdit.Types"
import * as S from "./PostEditEditor.Styles"
import PostEditInput from "./components/PostEditInput/PostEditInput"
import PostEditUrl from "./components/PostEditUrl/PostEditUrl"
import PostEditCategory from "./components/PostEditCategory/PostEditCategory"
import PostEditButton from "./components/PostEditButton/PostEditButton"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import createPost from "../../apis/createPost"
import { useState } from "react"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { useNavigate } from "react-router-dom"

interface PostEditEditorProps {
  isNewPost: boolean
  onEdit: HandleEditPost
  postData: EditPostState
}

const PostEditEditor = ({
  onEdit,
  postData,
  isNewPost,
}: PostEditEditorProps) => {
  const {
    isShowModal: isShowConfirm,
    showModal: showConfirm,
    closeModal: closeConfirm,
  } = useModal()
  const {
    isShowModal: isShowAlert,
    showModal: showAlert,
    closeModal: closeAlert,
  } = useModal()
  const {
    isShowModal: isShowComplete,
    showModal: showComplete,
    closeModal: closeComplete,
  } = useModal()

  const navigation = useNavigate()
  const [alertMessage, setAlertMessage] = useState("")

  const handleSubmitPost = () => {
    showConfirm()
  }

  const handleCloseConfirm = (isAccept: boolean) => {
    closeConfirm()

    if (!isAccept) {
      return
    }

    // if (postData.category) {
    //   return
    // }

    // if (postData.content) {
    //   return
    // }

    // if (postData.mediaUrl) {
    //   return
    // }

    if (isNewPost) {
      createPost(postData).then((res) => {
        if (res) {
          showComplete()
          return
        }

        if (!res) {
          setAlertMessage("등록에 실패했습니다 다시 시도해주세요.. 🥹")
          showAlert()
          return
        }
      })
    }
  }

  const handleCloseComplete = () => {
    closeComplete()
    navigation("/")
  }

  return (
    <>
      <S.PostEditEditorLayout>
        <PostEditButton
          onSubmit={handleSubmitPost}
          isNewPost={isNewPost}
        />
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
      <ConfirmModal
        isShow={isShowConfirm}
        message={"게시물을 등록 하시겠나요?"}
        onClose={handleCloseConfirm}
      />

      <AlertModal
        isShow={isShowAlert}
        alertMessage={alertMessage}
        onClose={closeAlert}
      />

      <AlertModal
        isShow={isShowComplete}
        alertMessage={"등록이 완료되었습니다!"}
        onClose={handleCloseComplete}
      />
    </>
  )
}

export default PostEditEditor
