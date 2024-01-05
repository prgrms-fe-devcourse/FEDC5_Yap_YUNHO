import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditUrl.Styles"
import useModal from "@/components/Modal/hooks/useModal"
import SmallModal from "@/components/Modal/SmallModal"
import PostEditPrompt from "./components/PostEditPrompt"
import { POST_EDIT_EDITOR_PLACEHOLDER } from "@/components/PostEdit/constants/PostEdit.Constants"

interface PostEditUrlProps {
  text: string
  onEdit: HandleEditPost
}

const PostEditUrl = ({ text, onEdit }: PostEditUrlProps) => {
  const { isModalToggle, showModal, closeModal } = useModal()

  handleEditUrl

  return (
    <>
      <S.PostEditUrlLayout>
        <S.PostEditUrlTitle>영상 URL</S.PostEditUrlTitle>
        <S.PostEditUrlInput
          readOnly
          value={text}
          placeholder={POST_EDIT_EDITOR_PLACEHOLDER.URL_INPUT}
          onClick={() => showModal()}
        />
      </S.PostEditUrlLayout>

      <SmallModal
        isShow={isModalToggle}
        $height={30}
      >
        <PostEditPrompt
          onClose={closeModal}
          text={text}
        />
      </SmallModal>
    </>
  )
}

export default PostEditUrl
