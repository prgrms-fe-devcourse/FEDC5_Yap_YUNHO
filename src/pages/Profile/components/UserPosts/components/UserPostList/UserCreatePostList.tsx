import * as S from "./UserPostList.Styles"
import UserPostListItem, {
  UserPostListItemProps,
} from "./components/UserPostListItem"
import { useNavigate, useParams } from "react-router-dom"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import PostDetail from "@/components/PostDetail/PostDetail"
import { useCallback, useEffect } from "react"

interface UserCreatePostListProps {
  createPostInfoList: UserPostListItemProps[]
  isLoading: boolean
}

const UserCreatePostList = ({
  createPostInfoList,
  isLoading,
}: UserCreatePostListProps) => {
  const { modalName, userId } = useParams()
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
