import * as S from "./PostDetailStatus.Styles"
import { Like, Post, User } from "@/types"
import { getConvertedCount } from "@/util/getConvertedCount"
import PostDetailEditActions from "./components/PostDetailEditActions"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import LinkIcon from "@mui/icons-material/Link"
import useModal from "@/components/Modal/hooks/useModal"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import { useNavigate } from "react-router-dom"
import { POST_DETAIL_MODAL_MESSAGE } from "@/constants/modalMessage"
import useLikePost from "@/components/PostDetail/hooks/useLikePost"
import useUnLikePost from "@/components/PostDetail/hooks/useUnLikePost"
import sendNotification from "@/apis/sendNotification"

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
  const {
    isShowModal: isShowConfirm,
    closeModal: closeConfirm,
    showModal: showConfirm,
  } = useModal()

  const navigate = useNavigate()
  const { fetchLikeMutate, LikeErrorAlertModal } = useLikePost()
  const { fetchUnlikeMutate, UnLikeErrorAlertModal } = useUnLikePost()
  const { mutate: likeMutate, isPending: isLikePending } = fetchLikeMutate
  const { mutate: unLikeMutate, isPending: isUnLikePending } = fetchUnlikeMutate

  const { likes } = post
  const myLikePost = post.likes.find(
    (likeData) => likeData.user === authUser._id,
  )

  const handleClickLikeButton = () => {
    if (!isLogin) {
      showConfirm()
      return
    }

    if (isLikePending || isUnLikePending) {
      return
    }

    if (myLikePost) {
      unLikeMutate(myLikePost._id)
      return
    }
    likeMutate(post._id, {
      onSuccess: (response: Like) => {
        sendNotification({
          notificationType: "LIKE",
          notificationTypeId: response._id,
          userId: post.author._id,
          postId: post._id,
        })
      },
    })
  }

  const handleConfirm = (isAccept: boolean) => {
    if (isAccept) {
      onClose()
      navigate("/login")
      return
    }
    closeConfirm()
  }
  return (
    <>
      <S.PostDetailStatusLayout>
        <S.PostDetailStatusActions>
          <S.PostDetailLike
            $isMyLikePost={!!myLikePost}
            onClick={handleClickLikeButton}
            disabled={isLikePending || isUnLikePending}
          >
            {myLikePost && myLikePost._id ? (
              <ThumbUpAltIcon />
            ) : (
              <ThumbUpOffAltIcon />
            )}

            {getConvertedCount(likes.length)}
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
      </S.PostDetailStatusLayout>

      <ConfirmModal
        isShow={isShowConfirm}
        onClose={handleConfirm}
        message={POST_DETAIL_MODAL_MESSAGE.CONFIRM.LIKE_NOT_LOGIN}
      />

      {LikeErrorAlertModal}
      {UnLikeErrorAlertModal}
    </>
  )
}

export default PostDetailStatus
