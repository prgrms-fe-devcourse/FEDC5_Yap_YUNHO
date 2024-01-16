import { useQuery } from "@tanstack/react-query"
import * as S from "./UserPostList.Styles"
import UserPostListItem, {
  UserPostListItemProps,
} from "./components/UserPostListItem"
import { API } from "@/apis/Api"
import { useNavigate, useParams } from "react-router-dom"
import { JSONPost } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import PostDetail from "@/components/PostDetail/PostDetail"
import { useCallback, useEffect } from "react"

const USER_POST_LIST_QUERY_KEY = "USER_POST_LIST_QUERY_KEY"

const UserCreatePostList = () => {
  const { userId, modalName } = useParams()
  const { user } = useAuthUserStore()
  const navigate = useNavigate()

  const { showDetailModal, isShowPostDetail, closeDetailModal } =
    usePostDetailModalStore()

  useEffect(() => {
    if (!modalName) {
      return
    }

    if (modalName === "postdetail") {
      showDetailModal()
    }
  }, [modalName, showDetailModal])

  const { data: createPostInfoList, isLoading } = useQuery({
    queryKey: [USER_POST_LIST_QUERY_KEY, userId],
    queryFn: () => API.get(`/posts/author/${userId}`).then((res) => res.data),
    select: (createPostInfoList) => {
      return createPostInfoList.map((postInfo: JSONPost) => {
        const { thumbnail } = JSON.parse(postInfo.title)
        const isLikedByMe = user.likes.some(({ post }) => post === postInfo._id)

        return {
          thumbnail,
          id: postInfo._id,
          likeCount: postInfo.likes.length,
          commentCount: postInfo.comments.length,
          isLikedByMe,
        }
      })
    },
  })

  const handleClickDetailModal = useCallback(() => {
    closeDetailModal()
    navigate(`/profile/${userId}`)
  }, [closeDetailModal, navigate, userId])

  if (isLoading) {
    return
  }

  const createdPostList = createPostInfoList.map(
    ({
      thumbnail,
      id,
      likeCount,
      commentCount,
      isLikedByMe,
    }: UserPostListItemProps) => {
      return (
        <UserPostListItem
          key={id}
          thumbnail={thumbnail}
          id={id}
          likeCount={likeCount}
          commentCount={commentCount}
          isLikedByMe={isLikedByMe}
        ></UserPostListItem>
      )
    },
  )

  return (
    <>
      <S.UserPostListContainer>{createdPostList}</S.UserPostListContainer>
      {isShowPostDetail && <PostDetail onClose={handleClickDetailModal} />}
    </>
  )
}

export default UserCreatePostList
