import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import * as S from "./PostCommentInput.Styles"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import { Post } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sendComment } from "@/components/PostDetail/apis/sendComment"
import commentValidation from "./util/commentValidation"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

const SEND_MUTATION_QUERY_KEY = "SEND_MUTATION_MUTATION_KEY_9128178621782"

interface PostCommentInputProps {
  post: Post
}

const PostCommentInput = ({ post }: PostCommentInputProps) => {
  const [writeComment, setWriteComment] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const { user: authUser, isLoggedIn } = useAuthUserStore()

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

  const queryClient = useQueryClient()
  const CommentApi_send = useMutation({
    mutationKey: [SEND_MUTATION_QUERY_KEY],
    mutationFn: sendComment,
    onSuccess: () => {
      queryClient.refetchQueries()
      setWriteComment("")
    },
    onError: () => {
      setAlertMessage(POST_DETAIL_ERROR_MESSAGE.COMMENT_SUBMIT.ERROR)
      showAlert()
    },
  })

  const navigate = useNavigate()

  const handleClickLoginCheck = (e: MouseEvent) => {
    e.preventDefault()
    if (isLoggedIn) {
      return
    }
    showConfirm()
  }

  const handleCloseConfirmModal = (isAccept: boolean) => {
    if (isAccept) {
      closeConfirm()
      navigate("/login")
      return
    }
    closeConfirm()
  }

  const handleSubmitComment = (e: FormEvent) => {
    e.preventDefault()
    if (isShowAlert || isShowConfirm) {
      return
    }

    if (!commentValidation(writeComment)) {
      setAlertMessage(POST_DETAIL_ERROR_MESSAGE.SUBMIT_VALIDATION.COMMENT)
      showAlert()
      return
    }

    CommentApi_send.mutate({
      comment: writeComment,
      postId: post._id,
    })
  }

  const handleChangeComment = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isShowAlert || isShowConfirm) {
      return
    }
    const { value } = target
    setWriteComment(value)
  }

  return (
    <>
      <S.PostCommentInputLayout>
        <S.PostCommentAuthUserProfile $authUserImage={authUser.image} />
        <S.PostCommentInputContainer
          onSubmit={handleSubmitComment}
          onClick={(e) => {
            !isLoggedIn && handleClickLoginCheck(e)
          }}
        >
          <S.PostCommentInput
            type="text"
            value={writeComment}
            $isNotLogin={!isLoggedIn}
            onChange={handleChangeComment}
          />

          <S.PostCommentButton disabled={!isLoggedIn}>
            <ArrowUpwardIcon />
          </S.PostCommentButton>
        </S.PostCommentInputContainer>
      </S.PostCommentInputLayout>

      <ConfirmModal
        isShow={isShowConfirm}
        onClose={handleCloseConfirmModal}
        message={POST_DETAIL_MODAL_MESSAGE.CONFIRM.COMMENT_FOCUS}
      />

      <AlertModal
        isShow={isShowAlert}
        onClose={closeAlert}
        alertMessage={alertMessage}
      />
    </>
  )
}

export default PostCommentInput
