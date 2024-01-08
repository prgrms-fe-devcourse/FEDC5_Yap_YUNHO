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
import updatePost from "../../apis/updatePost"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

interface PostEditEditorProps {
  onEdit: HandleEditPost
  postData: EditPostState
}

const PostEditEditor = ({ onEdit, postData }: PostEditEditorProps) => {
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

    // 각각의 validation 추가 예정
    // if (postData.category) {
    //   return
    // }

    // if (postData.content) {
    //   return
    // }

    // if (postData.mediaUrl) {
    //   return
    // }

    if (postData.postId === "newPost") {
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
        alertMessage={"완료되었습니다!"}
        onClose={handleCloseComplete}
      />
    </>
  )
}

export default PostEditEditor
