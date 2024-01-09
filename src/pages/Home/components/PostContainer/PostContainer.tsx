import PostCard from "@/components/PostCard/PostCard"
import * as S from "./PostContainer.Styles"

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

// API 이전까지 사용될 데이터
const DUMMY_POST = {
  likes: [],
  comments: [],
  _id: "dummyIdValue",
  image: null,
  imagePublicId: "모름",
  title: {
    content:
      "아마도 이건 테스트를 위한 값 그렇기 때문에 길게 길게 작성해보는 값",
    playUrl: "https://www.youtube.com/watch?v=66YDE3D_UxM",
    thumbnail: "https://i1.ytimg.com/vi/2gliGzb2_1I/maxresdefault.jpg",
  },
  channel: {},
  author: {
    image:
      "https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif",
  },
  createdAt: "아마도 2일에 생성함",
  updatedAt: "떠미더미",
}

const PostContainer = () => {
  return (
    <S.PostContainerLayout>
      <S.ArrowIcon $isLeft={true}>
        <ArrowBackIos className="arrow_icon" />
      </S.ArrowIcon>
      {/* small - left */}
      <S.PostSmallCard $isLeft={true}>
        <PostCard
          authUserProfile={DUMMY_POST.author.image}
          thumbnail={DUMMY_POST.title.thumbnail}
          content={DUMMY_POST.title.content}
          mediaUrl={DUMMY_POST.title.playUrl}
          textPercent={"60%"}
          isBlock={true}
        />
      </S.PostSmallCard>
      {/* sub - left */}
      <S.PostSubCard $isLeft={true}>
        <PostCard
          authUserProfile={DUMMY_POST.author.image}
          thumbnail={DUMMY_POST.title.thumbnail}
          content={DUMMY_POST.title.content}
          mediaUrl={DUMMY_POST.title.playUrl}
          textPercent={"80%"}
          isBlock={true}
        />
      </S.PostSubCard>
      {/* main */}
      <S.PostMainCard>
        <PostCard
          authUserProfile={DUMMY_POST.author.image}
          thumbnail={DUMMY_POST.title.thumbnail}
          content={DUMMY_POST.title.content}
          mediaUrl={DUMMY_POST.title.playUrl}
        />
      </S.PostMainCard>
      <S.PostSubCard $isLeft={false}>
        <PostCard
          authUserProfile={DUMMY_POST.author.image}
          thumbnail={DUMMY_POST.title.thumbnail}
          content={DUMMY_POST.title.content}
          mediaUrl={DUMMY_POST.title.playUrl}
          textPercent={"80%"}
          isBlock={true}
        />
      </S.PostSubCard>
      <S.PostSmallCard $isLeft={false}>
        <PostCard
          authUserProfile={DUMMY_POST.author.image}
          thumbnail={DUMMY_POST.title.thumbnail}
          content={DUMMY_POST.title.content}
          mediaUrl={DUMMY_POST.title.playUrl}
          textPercent={"60%"}
          isBlock={true}
        />
      </S.PostSmallCard>
      <S.ArrowIcon $isLeft={false}>
        <ArrowForwardIos className="arrow_icon" />
      </S.ArrowIcon>
    </S.PostContainerLayout>
  )
}

export default PostContainer
