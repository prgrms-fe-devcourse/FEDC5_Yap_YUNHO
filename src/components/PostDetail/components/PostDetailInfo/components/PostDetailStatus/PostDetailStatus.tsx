import { Post, User } from "@/types"
import * as S from "./PostDetailStatus.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"
import PostDetailEditActions from "./components/PostDetailEditActions"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import LinkIcon from "@mui/icons-material/Link"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { likePost, unLikePost } from "@/components/PostDetail/apis/likePost"
import useModal from "@/components/Modal/hooks/useModal"
import { useState } from "react"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

const MUTATION_KEY = {
  LIKE_POST_KEY: "IT_IS_LIKE_MUTATION_KEY_546786723746238",
  UN_LIKE_POST_KEY: "IT_IS_UN_LIKE_MUTATION_KEY_5448718927139",
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
  const { isShowModal, closeModal, showModal } = useModal()
  const [alertMessage, setAlertMessage] = useState("")

  const queryClient = useQueryClient()
  const likeMutate = useMutation({
    mutationKey: [MUTATION_KEY.LIKE_POST_KEY],
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.refetchQueries()
    },
    onError: () => {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.LIKE_ERROR)
      showModal()
    },
  })
  const unlikeMutate = useMutation({
    mutationKey: [MUTATION_KEY.UN_LIKE_POST_KEY],
    mutationFn: unLikePost,
    onSuccess: () => {
      queryClient.refetchQueries()
    },
    onError: () => {
      setAlertMessage(POST_EDIT_ERROR_MESSAGE.LIKE_ERROR)
      showModal()
    },
  })

  const { likes } = post
  const myLikePost = post.likes.filter(
    (likeData) => likeData.user === authUser._id,
  )[0]

  const handleClickLikeButton = () => {
    if (!isLogin) {
      return
    }

    if (myLikePost) {
      unlikeMutate.mutate(myLikePost._id)
      return
    }

    likeMutate.mutate(post._id)
  }
  return (
    <>
      <S.PostDetailStatus>
        <S.PostDetailStatusActions>
          <S.PostDetailLike
            $isMyLikePost={!!myLikePost}
            onClick={handleClickLikeButton}
          >
            {myLikePost ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}

            {convertFollowCount(likes.length)}
          </S.PostDetailLike>

          <S.PostDetailLink
            href={post.title.mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
          </S.PostDetailLink>
        </S.PostDetailStatusActions>

        {isMyPost && (
          <PostDetailEditActions
            onClose={onClose}
            post={post}
          />
        )}
      </S.PostDetailStatus>

      <AlertModal
        isShow={isShowModal}
        alertMessage={alertMessage}
        onClose={closeModal}
      />
    </>
  )
}

export default PostDetailStatus
