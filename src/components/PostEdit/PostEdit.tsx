import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"

const PostEdit = () => {
  return (
    <S.PostEditLayout>
      <S.PostEditViewerContainer>
        <PostEditViewer />
      </S.PostEditViewerContainer>
      <S.PostEditBoundary />
      <S.PostEditEditorContainer>
        <PostEditEditor />
      </S.PostEditEditorContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
