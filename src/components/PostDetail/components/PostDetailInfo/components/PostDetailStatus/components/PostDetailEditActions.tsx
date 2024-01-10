import { useNavigate } from "react-router-dom"
import * as S from "./PostDetailEditActions.Styles"
import { Post } from "@/types"

interface PostDetailEditActionsProps {
  onClose: () => void
  post: Post
}

const PostDetailEditActions = ({
  onClose,
  post,
}: PostDetailEditActionsProps) => {
  const navigate = useNavigate()

  const handleClickEditButton = () => {
    onClose()
    navigate(`/postedit/${post._id}`)
  }

  return (
    <S.PostDetailEditActions>
      <S.PostDetailEditButton onClick={handleClickEditButton}>
        {"수정"}
      </S.PostDetailEditButton>
      <S.PostDetailEditButton>{"삭제"}</S.PostDetailEditButton>
    </S.PostDetailEditActions>
  )
}

export default PostDetailEditActions
