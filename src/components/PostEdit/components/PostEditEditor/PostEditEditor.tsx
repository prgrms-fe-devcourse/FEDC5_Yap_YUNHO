import { EditPostState, HandleEditPost } from "../../PostEdit.Types"
import * as S from "./PostEditEditor.Styles"
import PostEditInput from "./components/PostEditInput/PostEditInput"
import PostEditUrl from "./components/PostEditUrl/PostEditUrl"
import PostEditCategory from "./components/PostEditCategory/PostEditCategory"
import PostEditButton from "./components/PostEditButton/PostEditButton"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useState } from "react"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"
import checkCategoryValidation from "../../util/checkCategoryValidation"
import checkUrlValidation from "../../util/checkUrlValidation"
import checkContentValidation from "../../util/checkContentValidation"
import { POST_EDIT_MODAL_MESSAGE } from "@/constants/modalMessage"
import useCreatePost from "../../hooks/useCreatePost"
import useUpdatePost from "../../hooks/useUpdatePost"

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
  const { createPostMutate, CreatePostErrorAlertModal } = useCreatePost()
  const { updatePostMutate, UpdatePostErrorAlertModal } = useUpdatePost()

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
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_VALIDATION.CATEGORY)
      showAlert()
      return
    }

    if (!checkContentValidation(postData.content)) {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_VALIDATION.CONTENT)
      showAlert()
      return
    }

    if (!checkUrlValidation(postData.mediaUrl)) {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.SUBMIT_VALIDATION.MEDIA_RUL)
      showAlert()
      return
    }

    if (isNewPost) {
      createPostMutate.mutate(postData, {
        onSuccess: () => {
          showComplete()
        },
      })
      return
    }

    if (postData.postId) {
      updatePostMutate.mutate(postData, {
        onSuccess: () => {
          showComplete()
        },
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
            ? POST_EDIT_MODAL_MESSAGE.CONFIRM.SUBMIT_NEW_POST
            : POST_EDIT_MODAL_MESSAGE.CONFIRM.SUBMIT_UPDATE_POST
        }
        onClose={handleCloseConfirm}
      />

      <AlertModal
        isShow={isShowComplete}
        alertMessage={POST_EDIT_MODAL_MESSAGE.COMPLETE.SUBMIT_POST}
        onClose={handleCloseComplete}
      />

      <AlertModal
        isShow={isShowAlert}
        alertMessage={alertMessage}
        onClose={closeAlert}
      />

      {CreatePostErrorAlertModal}
      {UpdatePostErrorAlertModal}
    </>
  )
}

export default PostEditEditor
