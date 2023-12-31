import * as S from "./PostContainer.Styles"

const PostContainer = () => {
  return (
    <S.PostContainerLayout>
      <S.ArrowIcon
        className="material-symbols-outlined"
        $isLeft={true}
      >
        arrow_back_ios
      </S.ArrowIcon>
      <S.PostSmallCard $isLeft={true} />
      <S.PostSubItem $isLeft={true} />
      <S.PostMainItem />
      <S.PostSubItem $isLeft={false} />
      <S.PostSmallCard $isLeft={false} />
      <S.ArrowIcon
        className="material-symbols-outlined"
        $isLeft={false}
      >
        arrow_forward_ios
      </S.ArrowIcon>
    </S.PostContainerLayout>
  )
}

export default PostContainer
