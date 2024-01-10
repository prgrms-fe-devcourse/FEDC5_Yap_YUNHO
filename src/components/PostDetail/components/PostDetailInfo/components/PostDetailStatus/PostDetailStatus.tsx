import { Post, User } from "@/types"
import * as S from "./PostDetailStatus.Styles"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import { convertFollowCount } from "@/util/convertFollowCount"
import PostDetailEditActions from "./PostDetailEditActions/PostDetailEditActions"

interface PostDetailStatusProps {
  post: Post
  authUser: User
  isMyPost: boolean
  onClose: () => void
}
const PostDetailStatus = ({
  post,
  authUser,
  isMyPost,
  onClose,
}: PostDetailStatusProps) => {
  const { likes } = post
  return (
    <S.PostDetailStatus>
      <S.PostDetailStatusActions>
        <S.PostDetailLike>
          <ThumbUpOffAltIcon />
          {convertFollowCount(likes.length)}
        </S.PostDetailLike>
      </S.PostDetailStatusActions>

      {<PostDetailEditActions />}
    </S.PostDetailStatus>
  )
}

export default PostDetailStatus
