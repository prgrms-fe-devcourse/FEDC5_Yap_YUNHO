import PostDetail from "@/components/PostDetail/PostDetail"
import * as S from "./UserPostList.Styles"
import UserPostListItem, {
  UserPostListItemProps,
} from "./components/UserPostListItem"
import { API } from "@/apis/Api"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useQueries } from "@tanstack/react-query"
import { useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const MY_LIKE_POST_LIST_QUERY_KEY = "MY_LIKE_POST_LIST_QUERY_KEY"

const MyLikePostList = () => {
  const navigate = useNavigate()
  const { userId, modalName } = useParams()
  const { showDetailModal, isShowPostDetail, closeDetailModal } =
    usePostDetailModalStore()

  const handleClickDetailModal = useCallback(() => {
    closeDetailModal()
    navigate(`/profile/${userId}`)
  }, [closeDetailModal, navigate, userId])

  const { user } = useAuthUserStore()

  useEffect(() => {
    if (!modalName) {
      return
    }

    if (modalName === "postdetail") {
      showDetailModal()
    }
  }, [modalName, showDetailModal])

  const queryList = user.likes.map(({ post }) => ({
    queryKey: [MY_LIKE_POST_LIST_QUERY_KEY, post],
    queryFn: () => getPost(post),
  }))

  const fetchQueries = useQueries({
    queries: queryList,
  })

  const isAllSuccess = fetchQueries.every((result) => result.isSuccess)
  if (!isAllSuccess) {
    return
  }

  return (
    <>
      <S.UserPostListContainer>
        {fetchQueries.map(({ data }) => {
          if (!data) {
            return
          }
          const { thumbnail, id, likeCount, commentCount } = data

          return (
            <UserPostListItem
              key={id}
              thumbnail={thumbnail}
              id={id}
              likeCount={likeCount}
              commentCount={commentCount}
            />
          )
        })}
      </S.UserPostListContainer>
      {isShowPostDetail && <PostDetail onClose={handleClickDetailModal} />}
    </>
  )
}

export default MyLikePostList

const getPost = async (id: string) => {
  return await API.get(`/posts/${id}`)
    .then((res) => res.data)
    .then((likePostInfo) => {
      const { thumbnail } = JSON.parse(likePostInfo.title)

      const newLikePost: UserPostListItemProps = {
        thumbnail,
        id: likePostInfo._id,
        likeCount: likePostInfo.likes.length,
        commentCount: likePostInfo.comments.length,
      }
      return newLikePost
    })
    .catch(() => {
      return null
    })
}
