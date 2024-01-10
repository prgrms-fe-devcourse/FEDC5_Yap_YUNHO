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

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { POST_EDIT_MODAL_MESSAGE } from "@/constants/modalMessage"

const MUTATION_KEY = {
  UPDATE_POST: "IT_IS_UPDATE_KEY_12361278467821",
  CREATE_POST: "IT_IS_CREATE_KEY_64895712389571",
}

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

  const queryClient = useQueryClient()
  const updateMutate = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_POST],
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.refetchQueries()
      showComplete()
    },
    onError: () => {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.POST_SUBMIT.UPDATE_POST)
      showAlert()
    },
  })

  const createMutate = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_POST],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.refetchQueries()
      showComplete()
    },
    onError: () => {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.POST_SUBMIT.NEW_POST)
      showAlert()
    },
  })

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
      createMutate.mutate(postData)
      return
    }

    if (postData.postId) {
      updateMutate.mutate(postData)
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
        isShow={isShowAlert}
        alertMessage={alertMessage}
        onClose={closeAlert}
      />

      <AlertModal
        isShow={isShowComplete}
        alertMessage={POST_EDIT_MODAL_MESSAGE.COMPLETE.SUBMIT_POST}
        onClose={handleCloseComplete}
      />
    </>
  )
}

export default PostEditEditor
