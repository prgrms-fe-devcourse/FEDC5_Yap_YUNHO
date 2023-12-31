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
import updatePost from "../../apis/updatePost"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"
import checkCategoryValidation from "../../util/checkCategoryValidation"
import checkUrlValidation from "../../util/checkUrlValidation"
import checkContentValidation from "../../util/checkContentValidation"
import { POST_EDIT_MODAL_MESSAGE } from "../../constants/PostEdit.Constants"

interface PostEditEditorProps {
  onEdit: HandleEditPost
  onClose: () => void
  postData: EditPostState
}

const PostEditEditor = ({ onEdit, onClose, postData }: PostEditEditorProps) => {
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
  const [alertMessage, setAlertMessage] = useState("")

  const isNewPost = postData.postId === "newPost"

  const handleSubmitPost = () => {
    showConfirm()
  }

  const handleCloseConfirm = (isAccept: boolean) => {
    closeConfirm()

    if (!isAccept) {
      return
    }

    if (!checkCategoryValidation(postData.category)) {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_VALIDATION_CATEGORY)
      showAlert()
      return
    }

    if (!checkContentValidation(postData.content)) {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_VALIDATION_CONTENT)
      showAlert()
      return
    }

    if (!checkUrlValidation(postData.mediaUrl)) {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_VALIDATION_MEDIA_RUL)
      showAlert()
      return
    }

    if (isNewPost) {
      createPost(postData).then((res) => {
        if (res) {
          showComplete()
          return
        }

        if (!res) {
          setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_ERROR_NEW_POST)
          showAlert()
          return
        }
      })
      return
    }

    if (postData.postId) {
      updatePost(postData).then((res) => {
        if (res) {
          showComplete()
        }

        if (!res) {
          setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_ERROR_UPDATE_POST)
          showAlert()
          return
        }
      })
      return
    }
  }

  const handleCloseComplete = () => {
    closeComplete()
    onClose()
  }

  return (
    <>
      <S.PostEditEditorLayout>
        <PostEditButton
          onSubmit={handleSubmitPost}
          postData={postData}
        />
        <PostEditUrl
          urlPath={postData.mediaUrl}
          onEdit={onEdit}
        />
        <PostEditInput
          text={postData.content}
          onEdit={onEdit}
        />
        <PostEditCategory
          onEdit={onEdit}
          postData={postData}
        />
      </S.PostEditEditorLayout>
      <ConfirmModal
        isShow={isShowConfirm}
        message={
          isNewPost
            ? POST_EDIT_MODAL_MESSAGE.SUBMIT_NEW_POST_CONFIRM
            : POST_EDIT_MODAL_MESSAGE.SUBMIT_UPDATE_POST_CONFIRM
        }
        onClose={handleCloseConfirm}
      />

      <AlertModal
        isShow={isShowAlert}
        alertMessage={alertMessage}
        onClose={closeAlert}
      />

      <AlertModal
        isShow={isShowComplete}
        alertMessage={POST_EDIT_MODAL_MESSAGE.SUBMIT_COMPLETE}
        onClose={handleCloseComplete}
      />
    </>
  )
}

export default PostEditEditor
