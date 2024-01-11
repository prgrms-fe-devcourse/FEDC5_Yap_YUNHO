import { PostComment } from "@/types"
import * as S from "./PostCommentList.Styles"
import PostCommentItem from "./components/PostCommentItem"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import deleteComment from "@/components/PostDetail/apis/deleteComment"
import useModal from "@/components/Modal/hooks/useModal"
import { useState } from "react"

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
  const [alertMessage, setAlertMessage] = useState("")

  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationKey: [COMMENT_DELETE_MUTATION_KEY],
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.refetchQueries()
      setAlertMessage("댓글이 삭제되었습니다!")
      showAlert()
      return
    },
    onError: () => {
      setAlertMessage("삭제과정에서 오류가 발생했습니다. 다시 시도해주세요!")
      showAlert()
    },
  })

  const handleDeleteComment = (commentId: string) => {
    deleteMutation.mutate(commentId)
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
            />
          ))}
      </S.PostCommentListLayout>

      <AlertModal
        alertMessage={alertMessage}
        isShow={isShowAlert}
        onClose={closeAlert}
      />
    </>
  )
}

export default PostCommentList
