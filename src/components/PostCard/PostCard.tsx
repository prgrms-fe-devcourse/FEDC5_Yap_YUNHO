import * as S from "./PostCard.Styles"
import { PostCardProps } from "./PostCard.Types"
import MediaPlayer from "./components/MediaPlayer/MediaPlayer"
import { PostCardContent } from "./components/PostCardContent/PostCardContent"
import PostCardThumbnail from "./components/PostCardThumbnail/PostCardThumbnail"
import PostCardUserProfile from "./components/PostCardUserProfile/PostCardUserProfile"

const PostCard = ({
  textPercent,
  isBlock = false,
  // 이후 기본 유저 프로필 사진으로 대체
  authUserProfile = "",
  thumbnail,
  content,
  mediaUrl,
  isNoneProfile,
  onNavigatePostDetail,
}: PostCardProps): React.ReactNode => {
  return (
    <S.PostCardLayout>
      <PostCardUserProfile
        imgUrl={authUserProfile}
        isNoneProfile={isNoneProfile}
        onNavigatePostDetail={onNavigatePostDetail}
      />
      <PostCardThumbnail
        imgUrl={thumbnail}
        onNavigatePostDetail={onNavigatePostDetail}
      />
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
