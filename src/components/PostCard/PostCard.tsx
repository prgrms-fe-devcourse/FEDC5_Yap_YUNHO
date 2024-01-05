import * as S from "./PostCard.Styles"
import { PostCardProps } from "./PostCard.Types"
import MediaPlayer from "./components/MediaPlayer/MediaPlayer"
import { PostCardContent } from "./components/PostCardContent/PostCardContent"
import PostCardThumbnail from "./components/PostCardThumbnail/PostCardThumbnail"
import PostCardUserProfile from "./components/PostCardUserProfile/PostCardUserProfile"

// 이후 props로 변경
const DUMMY_POST = {
  likes: [],
  comments: [],
  _id: "dummyIdValue",
  image: "https://i1.ytimg.com/vi/2gliGzb2_1I/maxresdefault.jpg",
  imagePublicId: "모름",
  title: {
    content:
      "아마도 이건 테스트를 위한 값 그렇기 때문에 길게 길게 작성해보는 값",
    musicUrl: "https://www.youtube.com/watch?v=U8v4A_zXhq4",
  },
  channel: {},
  author: {
    image:
      "https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif",
  },
  createdAt: "아마도 2일에 생성함",
  updatedAt: "떠미더미",
}

const PostCard = ({
  textPercentage,
  isBlock = false,
}: PostCardProps): React.ReactNode => {
  return (
    <S.PostCardLayout>
      {/* 이후 Profile은 조건부 렌더링 적용 예정 */}
      <PostCardUserProfile imgUrl={DUMMY_POST.author.image} />
      <PostCardThumbnail imgUrl={DUMMY_POST.image} />
      <PostCardContent
        content={DUMMY_POST.title.content}
        textPercentage={textPercentage}
      />
      <MediaPlayer
        isBlock={isBlock}
        url={DUMMY_POST.title.musicUrl}
      />
    </S.PostCardLayout>
  )
}

export default PostCard
