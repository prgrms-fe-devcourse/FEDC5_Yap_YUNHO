import PostCard from "@/components/PostCard/PostCard"
import * as S from "./PostCardList.Styles"

import { Post } from "@/types"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"
import usePostDetailModalStore from "@/components/PostDetail/store/usePostDetailModalStore"
import { OnNavigatePostDetail } from "@/components/PostCard/PostCard.Types"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect } from "react"
import PostDetail from "@/components/PostDetail/PostDetail"

interface PostCardListProps {
  postList: Post[] | null[]
  onClickLeftCard: () => void
  onClickRightCard: () => void
}

const PostCardList = ({
  postList,
  onClickLeftCard,
  onClickRightCard,
}: PostCardListProps) => {
  const { isShowEditModal } = usePostEditModalStore()
  const { isShowPostDetail, showDetailModal, closeDetailModal } =
    usePostDetailModalStore()
  const { modalName } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!modalName) {
      return
    }

    if (modalName === "postdetail") {
      showDetailModal()
    }
  }, [modalName, showDetailModal])

  const handleNavigatePostDetail: OnNavigatePostDetail = (postId) => {
    navigate(`/postdetail/${postId}`)
  }

  const handleClosePostDetail = useCallback(() => {
    closeDetailModal()
    navigate("/")
  }, [closeDetailModal, navigate])

  return (
    <>
      {postList[0] && (
        <S.PostSmallCard
          $isLeft={true}
          onClick={onClickLeftCard}
        >
          <PostCard
            authUserProfile={postList[0].author.image}
            thumbnail={postList[0].title.thumbnail}
            content={postList[0].title.content}
            mediaUrl={postList[0].title.mediaUrl}
            postId={postList[0]._id}
            textPercent={"60%"}
            isBlock={true}
          />
        </S.PostSmallCard>
      )}

      {postList[1] && (
        <S.PostSubCard
          $isLeft={true}
          onClick={onClickLeftCard}
        >
          <PostCard
            authUserProfile={postList[1].author.image}
            thumbnail={postList[1].title.thumbnail}
            content={postList[1].title.content}
            mediaUrl={postList[1].title.mediaUrl}
            postId={postList[1]._id}
            textPercent={"80%"}
            isBlock={true}
          />
        </S.PostSubCard>
      )}

      {postList[2] && (
        <S.PostMainCard>
          <PostCard
            isBlock={isShowEditModal || isShowPostDetail}
            authUserProfile={postList[2].author.image}
            thumbnail={postList[2].title.thumbnail}
            content={postList[2].title.content}
            mediaUrl={postList[2].title.mediaUrl}
            postId={postList[2]._id}
            onNavigatePostDetail={handleNavigatePostDetail}
          />
        </S.PostMainCard>
      )}
      {postList[3] && (
        <S.PostSubCard
          $isLeft={false}
          onClick={onClickRightCard}
        >
          <PostCard
            authUserProfile={postList[3].author.image}
            thumbnail={postList[3].title.thumbnail}
            content={postList[3].title.content}
            mediaUrl={postList[3].title.mediaUrl}
            postId={postList[3]._id}
            textPercent={"80%"}
            isBlock={true}
          />
        </S.PostSubCard>
      )}
      {postList[4] && (
        <S.PostSmallCard
          $isLeft={false}
          onClick={onClickRightCard}
        >
          <PostCard
            authUserProfile={postList[4].author.image}
            thumbnail={postList[4].title.thumbnail}
            content={postList[4].title.content}
            mediaUrl={postList[4].title.mediaUrl}
            postId={postList[4]._id}
            textPercent={"60%"}
            isBlock={true}
          />
        </S.PostSmallCard>
      )}

      {isShowPostDetail && <PostDetail onClose={handleClosePostDetail} />}
    </>
  )
}

export default PostCardList
