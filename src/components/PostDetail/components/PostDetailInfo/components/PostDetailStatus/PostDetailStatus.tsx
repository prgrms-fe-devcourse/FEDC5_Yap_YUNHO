import { Post, User } from "@/types"
import * as S from "./PostDetailStatus.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"
import PostDetailEditActions from "./components/PostDetailEditActions"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import LinkIcon from "@mui/icons-material/Link"

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
  console.log(post)

  const isMyLikePost = false

  console.log(authUser, isMyPost)
  return (
    <S.PostDetailStatus>
      <S.PostDetailStatusActions>
        <S.PostDetailLike $isMyLikePost={isMyLikePost}>
          {isMyLikePost ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}

          {convertFollowCount(likes.length)}
        </S.PostDetailLike>
        <LinkIcon />
      </S.PostDetailStatusActions>

      {isMyPost && (
        <PostDetailEditActions
          onClose={onClose}
          post={post}
        />
      )}
    </S.PostDetailStatus>
  )
}

export default PostDetailStatus
