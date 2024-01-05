import * as S from "./PostEdit.Styles"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"

const PostEdit = () => {
  return (
    <S.PostEditLayout>
      <S.PostEditViewerContainer>
        <PostEditViewer />
      </S.PostEditViewerContainer>
      <S.PostEditBoundary />
      <S.PostEditEditorContainer></S.PostEditEditorContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
