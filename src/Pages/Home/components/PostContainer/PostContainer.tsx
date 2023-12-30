import * as S from "./PostContainer.Styles"

const PostContainer = () => {
  return (
    <S.PostContainerLayout>
      <span className="material-symbols-outlined">arrow_back_ios</span>
      <S.PostSmallCard $isLeft={true} />
      <S.PostSubItem $isLeft={true} />
      <S.PostMainItem />
      <S.PostSubItem $isLeft={false} />
      <S.PostSmallCard $isLeft={false} />
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </S.PostContainerLayout>
  )
}

export default PostContainer
