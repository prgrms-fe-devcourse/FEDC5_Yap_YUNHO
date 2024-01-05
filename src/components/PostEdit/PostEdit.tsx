import * as S from "./PostEdit.Styles"

const PostEdit = () => {
  return (
    <S.PostEditLayout>
      <S.PostEditViewerContainer>
        <S.PostEditViewer></S.PostEditViewer>
      </S.PostEditViewerContainer>
      <S.PostEditBoundary />
      <S.PostEditEditorContainer></S.PostEditEditorContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
