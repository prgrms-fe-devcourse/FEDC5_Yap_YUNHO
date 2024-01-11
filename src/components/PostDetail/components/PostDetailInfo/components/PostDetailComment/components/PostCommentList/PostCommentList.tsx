import { PostComment } from "@/types"
import * as S from "./PostCommentList.Styles"
import PostCommentItem from "./components/PostCommentItem/PostCommentItem"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import deleteComment from "@/components/PostDetail/apis/deleteComment"
import useModal from "@/components/Modal/hooks/useModal"
import { useState } from "react"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import PostCommentPrompt from "./components/PostCommentPrompt/PostCommentPrompt"

const COMMENT_DELETE_MUTATION_KEY =
  "IT_IS_DELETE_MUTATION_KEY_672532461414612689"

interface PostCommentListProps {
  commentList: PostComment[]
}

const PostCommentList = ({ commentList }: PostCommentListProps) => {
  const {
    isShowModal: isShowAlert,
    showModal: showAlert,
    closeModal: closeAlert,
  } = useModal()
  const {
    isShowModal: isShowPrompt,
    showModal: showPrompt,
    closeModal: closePrompt,
  } = useModal()
  const [alertMessage, setAlertMessage] = useState("")

  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationKey: [COMMENT_DELETE_MUTATION_KEY],
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.refetchQueries()
      setAlertMessage(POST_DETAIL_MODAL_MESSAGE.COMPLETE.COMMENT_DELETE)
      showAlert()
      return
    },
    onError: () => {
      setAlertMessage(POST_DETAIL_ERROR_MESSAGE.COMMENT.DELETE)
      showAlert()
    },
  })

  const handleDeleteComment = (commentId: string) => {
    deleteMutation.mutate(commentId)
  }

  const handleEditComment = (editComment: string) => {
    console.log(editComment)
  }

  const reversedList = [...commentList].reverse()
  return (
    <>
      <S.PostCommentListLayout>
        {reversedList &&
          reversedList.map((comment) => (
            <PostCommentItem
              key={comment._id}
              comment={comment}
              onDelete={handleDeleteComment}
              showEditPrompt={showPrompt}
            />
          ))}
      </S.PostCommentListLayout>

      <AlertModal
        alertMessage={alertMessage}
        isShow={isShowAlert}
        onClose={closeAlert}
      />

      <PostCommentPrompt
        isShow={isShowPrompt}
        onClose={closePrompt}
        onClickButton={handleEditComment}
      />
    </>
  )
}

export default PostCommentList
