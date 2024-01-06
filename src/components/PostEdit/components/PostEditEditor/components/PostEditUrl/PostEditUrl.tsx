import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditUrl.Styles"
import useModal from "@/components/Modal/hooks/useModal"
import PostEditUrlPrompt from "./components/PostEditUrlPrompt"
import DeleteIcon from "@mui/icons-material/Delete"
import {
  POST_EDIT_EDITOR_PLACEHOLDER,
  POST_EDIT_MODAL_MESSAGE,
} from "@/components/PostEdit/constants/PostEdit.Constants"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"

interface PostEditUrlProps {
  urlPath: string
  onEdit: HandleEditPost
}

const PostEditUrl = ({ urlPath, onEdit }: PostEditUrlProps) => {
  const {
    isModalToggle: isPromptToggle,
    closeModal: closePrompt,
    showModal: showPrompt,
  } = useModal()
  const {
    isModalToggle: isConfirmToggle,
    closeModal: closeConfirm,
    showModal: showConfirm,
  } = useModal()

  const handleEditUrl = (newUrl: string) => {
    onEdit({
      type: "mediaUrl",
      value: newUrl,
    })
  }

  const handleRemoveUrl = (response: boolean) => {
    console.log(response)
    if (response) {
      onEdit({
        type: "mediaUrl",
        value: "",
      })
    }

    closeConfirm()
  }

  return (
    <>
      <S.PostEditUrlLayout>
        <S.PostEditUrlTitle>
          <S.PostEitUrlTitleText> 영상 URL</S.PostEitUrlTitleText>
          <DeleteIcon onClick={showConfirm} />
        </S.PostEditUrlTitle>
        <S.PostEditUrlInput
          readOnly
          value={urlPath}
          placeholder={POST_EDIT_EDITOR_PLACEHOLDER.URL_INPUT}
          onClick={() => showPrompt()}
        />
      </S.PostEditUrlLayout>

      <PostEditUrlPrompt
        onClose={closePrompt}
        onEdit={handleEditUrl}
        isShow={isPromptToggle}
        url={urlPath}
      />

      <ConfirmModal
        isShow={isConfirmToggle}
        onClose={handleRemoveUrl}
        message={POST_EDIT_MODAL_MESSAGE.URL_CONFIRM}
        acceptButtonText={"확인"}
      />
    </>
  )
}

export default PostEditUrl
