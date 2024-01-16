import PostCard from "@/components/PostCard/PostCard"
import * as S from "./PostCardList.Styles"

import { Post } from "@/types"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import { OnNavigatePostDetail } from "@/components/PostCard/PostCard.Types"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect } from "react"
import PostDetail from "@/components/PostDetail/PostDetail"

interface PostCardListProps {
  postList: Post[] | null[]
  onClickLeftCard: (count: number) => void
  onClickRightCard: (count: number) => void
}

const PostCardList = ({
  postList,
  onClickLeftCard,
  onClickRightCard,
}: PostCardListProps) => {
  const { isShowEditModal } = usePostEditModalStore()
  const { isShowPostDetail, showDetailModal, closeDetailModal } =
    usePostDetailModalStore()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      return
    }

    showDetailModal()
  }, [id, showDetailModal])

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
          onClick={() => onClickLeftCard(2)}
        >
          <PostCard
            author={postList[0].author}
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
          onClick={() => onClickLeftCard(1)}
        >
          <PostCard
            author={postList[1].author}
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
            author={postList[2].author}
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
          onClick={() => onClickRightCard(1)}
        >
          <PostCard
            author={postList[3].author}
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
          onClick={() => onClickRightCard(2)}
        >
          <PostCard
            author={postList[4].author}
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
