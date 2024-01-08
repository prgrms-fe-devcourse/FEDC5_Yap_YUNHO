import { PostContent } from "@/types"
import { HandleEditPost } from "../../PostEdit.Types"
import * as S from "./PostEditEditor.Styles"
import PostEditInput from "./components/PostEditInput/PostEditInput"
import PostEditUrl from "./components/PostEditUrl/PostEditUrl"
import PostEditCategory from "./components/PostEditCategory/PostEditCategory"
import PostEditButton from "./components/PostEditButton/PostEditButton"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import useModal from "@/components/Modal/hooks/useModal"

interface PostEditEditorProps {
  onEdit: HandleEditPost
  postData: PostContent
}

const PostEditEditor = ({ onEdit, postData }: PostEditEditorProps) => {
  const { isShowModal, showModal, closeModal } = useModal()

  const handleSubmitPost = () => {
    showModal()
  }

  const handleCloseConfirm = (isAccept: boolean) => {
    closeModal()

    if (!isAccept) {
      return
    }

    console.log("dd")
  }
  return (
    <>
      <S.PostEditEditorLayout>
        <PostEditButton onSubmit={handleSubmitPost} />
        <PostEditUrl
          urlPath={postData.mediaUrl}
          onEdit={onEdit}
        />
        <PostEditInput
          text={postData.content}
          onEdit={onEdit}
        />
        <PostEditCategory onEdit={onEdit} />
      </S.PostEditEditorLayout>
      <ConfirmModal
        isShow={isShowModal}
        message={"게시물을 등록 하시겠나요?"}
        onClose={handleCloseConfirm}
      />
    </>
  )
}

export default PostEditEditor
