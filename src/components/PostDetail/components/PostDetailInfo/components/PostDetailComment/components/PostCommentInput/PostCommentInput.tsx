import { ChangeEvent, FormEvent, MouseEvent, useState } from "react"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import * as S from "./PostCommentInput.Styles"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import { Post } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { sendComment } from "@/components/PostDetail/apis/sendComment"

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

  const CommentApi_send = useMutation({
    mutationKey: [SEND_MUTATION_QUERY_KEY],
    mutationFn: sendComment,
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
  }

  const handleChangeComment = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setWriteComment(value)
  }

  return (
    <>
      <S.PostCommentInputLayout>
        <S.PostCommentAuthUserProfile $authUserImage={""} />
        <S.PostCommentInputContainer
          onClick={handleClickLoginCheck}
          onSubmit={handleSubmitComment}
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
    </>
  )
}

export default PostCommentInput
