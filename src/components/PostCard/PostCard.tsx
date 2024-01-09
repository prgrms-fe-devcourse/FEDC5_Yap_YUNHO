import * as S from "./PostCard.Styles"
import { PostCardProps } from "./PostCard.Types"
import MediaPlayer from "./components/MediaPlayer/MediaPlayer"
import { PostCardContent } from "./components/PostCardContent/PostCardContent"
import PostCardThumbnail from "./components/PostCardThumbnail/PostCardThumbnail"
import PostCardUserProfile from "./components/PostCardUserProfile/PostCardUserProfile"

const PostCard = ({
  textPercent,
  isBlock = false,
  authUserProfile,
  thumbnail,
  content,
  mediaUrl,
  isNoneProfile,
}: PostCardProps): React.ReactNode => {
  return (
    <S.PostCardLayout>
      {!isNoneProfile && <PostCardUserProfile imgUrl={authUserProfile} />}
      <PostCardThumbnail imgUrl={thumbnail} />
      <PostCardContent
        content={content}
        textPercent={textPercent}
      />
      <MediaPlayer
        isBlock={isBlock}
        url={mediaUrl}
      />
    </S.PostCardLayout>
  )
}

export default PostCard
