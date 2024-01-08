import PostCard from "@/components/PostCard/Postcard"
import * as S from "./PostCardList.styles"
import useModalDepth from "@/components/Modal/store/useModalDepth"
import { Post } from "@/types"

interface PostCardListProps {
  postList: Post[] | null[]
}

const PostCardList = ({ postList }: PostCardListProps) => {
  const { modalDepth } = useModalDepth()

  return (
    <>
      {postList[0] && (
        <S.PostSmallCard $isLeft={true}>
          <PostCard
            authUserProfile={postList[0].author.image}
            thumbnail={postList[0].title.thumbnail}
            content={postList[0].title.content}
            mediaUrl={postList[0].title.mediaUrl}
            textPercent={"60%"}
            isBlock={true}
          />
        </S.PostSmallCard>
      )}

      {postList[1] && (
        <S.PostSubCard $isLeft={true}>
          <PostCard
            authUserProfile={postList[1].author.image}
            thumbnail={postList[1].title.thumbnail}
            content={postList[1].title.content}
            mediaUrl={postList[1].title.mediaUrl}
            textPercent={"80%"}
            isBlock={true}
          />
        </S.PostSubCard>
      )}

      {postList[2] && (
        <S.PostMainCard>
          <PostCard
            isBlock={modalDepth !== 0}
            authUserProfile={postList[2].author.image}
            thumbnail={postList[2].title.thumbnail}
            content={postList[2].title.content}
            mediaUrl={postList[2].title.mediaUrl}
          />
        </S.PostMainCard>
      )}
      {postList[3] && (
        <S.PostSubCard $isLeft={false}>
          <PostCard
            authUserProfile={postList[3].author.image}
            thumbnail={postList[3].title.thumbnail}
            content={postList[3].title.content}
            mediaUrl={postList[3].title.mediaUrl}
            textPercent={"80%"}
            isBlock={true}
          />
        </S.PostSubCard>
      )}
      {postList[4] && (
        <S.PostSmallCard $isLeft={false}>
          <PostCard
            authUserProfile={postList[4].author.image}
            thumbnail={postList[4].title.thumbnail}
            content={postList[4].title.content}
            mediaUrl={postList[4].title.mediaUrl}
            textPercent={"60%"}
            isBlock={true}
          />
        </S.PostSmallCard>
      )}
    </>
  )
}

export default PostCardList
