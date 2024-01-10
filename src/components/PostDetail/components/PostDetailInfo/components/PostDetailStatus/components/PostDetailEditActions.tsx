import { useNavigate } from "react-router-dom"
import * as S from "./PostDetailEditActions.Styles"
import { Post } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import deletePost from "@/components/PostDetail/apis/deletePost"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"
import { useState } from "react"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

const MUTATION_KEY_DELETE_POST = "IT_IS_DELETE_MUTATION_KEY_41728461278632781"

interface PostDetailEditActionsProps {
  onClose: () => void
  post: Post
}

const PostDetailEditActions = ({
  onClose,
  post,
}: PostDetailEditActionsProps) => {
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
  const { isShowModal: isShowComplete, showModal: showComplete } = useModal()

  const [alertMessage, setAlertMessage] = useState("")
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const updateMutate = useMutation({
    mutationKey: [MUTATION_KEY_DELETE_POST],
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.refetchQueries()
      setAlertMessage("정상적으로 삭제되었습니다!")
      showComplete()
    },
    onError: () => {
      setAlertMessage("게시물 삭제에 실패하였습니다! 다시 시도해주세요!")
      showAlert()
    },
  })

  const handleClickEditButton = () => {
    onClose()
    navigate(`/postedit/${post._id}`)
  }

  const handleConfirmDeletePost = (response: boolean) => {
    if (!response) {
      return closeConfirm()
    }

    updateMutate.mutate(post._id)
    closeConfirm()
  }

  const handleCompleteDelete = () => {
    onClose()
    navigate(`/`)
  }

  return (
    <>
      <S.PostDetailEditActions>
        <S.PostDetailEditButton onClick={handleClickEditButton}>
          {"수정"}
        </S.PostDetailEditButton>
        <S.PostDetailEditButton onClick={showConfirm}>
          {"삭제"}
        </S.PostDetailEditButton>
      </S.PostDetailEditActions>

      <ConfirmModal
        isShow={isShowConfirm}
        onClose={handleConfirmDeletePost}
        message="해당 게시물을 삭제하시겠나요?"
      />

      <AlertModal
        isShow={isShowAlert}
        alertMessage={alertMessage}
        onClose={closeAlert}
      />

      <AlertModal
        isShow={isShowComplete}
        alertMessage={"삭제 되었습니다!"}
        onClose={handleCompleteDelete}
      />
    </>
  )
}

export default PostDetailEditActions
