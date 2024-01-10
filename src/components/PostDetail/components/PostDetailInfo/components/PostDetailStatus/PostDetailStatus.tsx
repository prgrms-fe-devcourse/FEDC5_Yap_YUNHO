import { Post, User } from "@/types"
import * as S from "./PostDetailStatus.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"
import PostDetailEditActions from "./components/PostDetailEditActions"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import LinkIcon from "@mui/icons-material/Link"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { likePost } from "@/components/PostDetail/apis/likePost"

const MUTATION_KEY = {
  LIKE_POST_KEY: "IT_IS_LIKE_MUTATION_KEY_546786723746238",
}

interface PostDetailStatusProps {
  post: Post
  authUser: User
  isMyPost: boolean
  isLogin: boolean
  onClose: () => void
}

const PostDetailStatus = ({
  post,
  authUser,
  isMyPost,
  isLogin,
  onClose,
}: PostDetailStatusProps) => {
  const queryClient = useQueryClient()
  const likeMutate = useMutation({
    mutationKey: [MUTATION_KEY.LIKE_POST_KEY],
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.refetchQueries()
      console.log("라이크 성공")
    },
    onError: () => {
      console.log("라이크 실패")
    },
  })

  const { likes } = post

  const isMyLikePost = post.likes.some(
    (likeData) => likeData.user === authUser._id,
  )

  const handleClickLikeButton = () => {
    if (!isLogin) {
      return
    }

    if (isMyLikePost) {
      return
    }

    likeMutate.mutate(post._id)
  }
  return (
    <>
      <S.PostDetailStatus>
        <S.PostDetailStatusActions>
          <S.PostDetailLike
            $isMyLikePost={isMyLikePost}
            onClick={handleClickLikeButton}
          >
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
    </>
  )
}

export default PostDetailStatus
