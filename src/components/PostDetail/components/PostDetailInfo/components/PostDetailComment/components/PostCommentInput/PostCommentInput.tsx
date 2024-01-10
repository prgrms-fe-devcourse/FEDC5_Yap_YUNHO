import { FormEvent, MouseEvent } from "react"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import * as S from "./PostCommentInput.Styles"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import { Post } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"

interface PostCommentInputProps {
  post: Post
}

const PostCommentInput = ({ post }: PostCommentInputProps) => {
  const { user: authUser, isLoggedIn } = useAuthUserStore()
  const {
    isShowModal: isShowConfirm,
    showModal: showConfirm,
    closeModal: closeConfirm,
  } = useModal()
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
            $isNotLogin={!isLoggedIn}
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
