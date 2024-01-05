import PostCard from "@/components/PostCard/Postcard"
import * as S from "./PostContainer.Styles"

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

const PostContainer = () => {
  return (
    <S.PostContainerLayout>
      <S.ArrowIcon $isLeft={true}>
        <ArrowBackIos className="arrow_icon" />
      </S.ArrowIcon>
      {/* small - left */}
      <S.PostSmallCard $isLeft={true}>
        <PostCard
          textPercentage={"60%"}
          isBlock={true}
        />
      </S.PostSmallCard>
      {/* sub - left */}
      <S.PostSubCard $isLeft={true}>
        <PostCard
          textPercentage={"80%"}
          isBlock={true}
        />
      </S.PostSubCard>
      {/* main */}
      <S.PostMainCard>
        <PostCard />
      </S.PostMainCard>
      <S.PostSubCard $isLeft={false}>
        <PostCard
          textPercentage={"80%"}
          isBlock={true}
        />
      </S.PostSubCard>
      <S.PostSmallCard $isLeft={false}>
        <PostCard
          textPercentage={"60%"}
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
