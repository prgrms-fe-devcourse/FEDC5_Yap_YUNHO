import { Post } from "@/types"
import { useNavigate } from "react-router-dom"

interface PostDetailInfoProps {
  onClose: () => void
  post: Post
}

const PostDetailInfo = ({ onClose, post }: PostDetailInfoProps) => {
  const navigate = useNavigate()
  return (
    <>
      <button
        onClick={() => {
          onClose()
          navigate(`/postedit/${post._id}`)
        }}
      >
        Modal 디테일 테스트
      </button>
    </>
  )
}

export default PostDetailInfo
