import * as S from "./PostCard.Styles"
import { PostCardProps } from "./PostCard.Types"
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
  title:
    "아마도 추천하면 듣기는 좋겠지만 들을 타이밍이 생길지는 모르겟는 그런 추천 ㄴ어륜어ㅏ휸 ㄴㅇ ㄹㄴㅇㅎㄴㅇ ㅎㄴㅇ ㅎㄴㅇ ㅎ ㄴㅇㅎ ㅇㄴ ㅎㅇ ㄴㅎ ㅇㄴ ㅎㅇㄴㅎㅇㄴㅎ ㅇㄴㅎ ㄴㅇㅎ ㄴㅇㅎ ㄴㅇㅎㄴㅇㅎㄴㅇㅎ ㄴㅇㅎ ㄴㅇㅎ ㄴㅇㅎ ㄴㅇ ㅇㄴㄹㄴㅇㄹ ㄴㅇㄹ ㄴㅇㄹ ㄴㅇㄹ ㄴㅇ ㅎㄴㅇ ㅎㄴㅇ ㄹㅇㄴㄹ ㄴㅇ ㅎㄴㅇ ㅎㄴㅇ ㅎ ㄴㅇㅎ ㅇㄴㅎ ㄴㅇ ㅎ ㄴㅇ ㅎ  ㄴㅇㅎㄴㅇ ㅎ ㄴㅇ  ㄴㅇㅎ ㄴㅇㅎ ㄴㅇ ㅎ ㄴㅇㅎ  ㄴㅇㅎㄴㅇ ㅎ  ㄴㅇ ㅎ ㅇ ㅎ ㄴ  ㄴㅇ  ㄴㅇ    ㄴㅇ  ",
  channel: {},
  author: {
    image:
      "https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif",
  },
  createdAt: "아마도 2일에 생성함",
  updatedAt: "떠미더미",
}

const PostCard = ({ textPercentage }: PostCardProps): React.ReactNode => {
  return (
    <S.PostCardLayout>
      <PostCardUserProfile imgUrl={DUMMY_POST.author.image} />
      <PostCardThumbnail imgUrl={DUMMY_POST.image} />
      <PostCardContent
        content={DUMMY_POST.title}
        textPercentage={textPercentage}
      />
      <S.PostCardPlayerLayout />
    </S.PostCardLayout>
  )
}

export default PostCard
