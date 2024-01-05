import * as S from "./PostEdit.Styles"
import PostEditEditor from "./components/PostEditEditor/PostEditEditor"
import PostEditViewer from "./components/PostEditViewer/PostEditViewer"

const PostEdit = () => {
  return (
    <S.PostEditLayout>
      <S.PostEditContainer>
        <PostEditViewer />
      </S.PostEditContainer>
      <S.PostEditBoundary />
      <S.PostEditContainer>
        <PostEditEditor />
      </S.PostEditContainer>
    </S.PostEditLayout>
  )
}

export default PostEdit
