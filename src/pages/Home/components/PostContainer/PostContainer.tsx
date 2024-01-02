import * as S from "./PostContainer.Styles"

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

const PostContainer = () => {
  return (
    <S.PostContainerLayout>
      <S.ArrowIcon $isLeft={true}>
        <ArrowBackIos className="arrow_icon" />
      </S.ArrowIcon>
      <S.PostSmallCard $isLeft={true} />
      <S.PostSubItem $isLeft={true} />
      <S.PostMainItem />
      <S.PostSubItem $isLeft={false} />
      <S.PostSmallCard $isLeft={false} />
      <S.ArrowIcon $isLeft={false}>
        <ArrowForwardIos className="arrow_icon" />
      </S.ArrowIcon>
    </S.PostContainerLayout>
  )
}

export default PostContainer
