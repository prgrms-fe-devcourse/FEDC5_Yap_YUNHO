import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditUrl.Styles"
import useModal from "@/components/Modal/hooks/useModal"
import PostEditUrlPrompt from "./components/PostEditUrlPrompt"
import DeleteIcon from "@mui/icons-material/Delete"
import ConfirmModal from "@/components/Modal/components/ConfirmModal/ConfirmModal"
import { POST_EDIT_MODAL_MESSAGE } from "@/constants/modalMessage"
import { POST_EDIT_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"

interface PostEditUrlProps {
  urlPath: string
  onEdit: HandleEditPost
}

const PostEditUrl = ({ urlPath, onEdit }: PostEditUrlProps) => {
  const {
    isShowModal: isShowPrompt,
    closeModal: closePrompt,
    showModal: showPrompt,
  } = useModal()
  const {
    isShowModal: isShowConfirm,
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
          placeholder={POST_EDIT_PLACEHOLDER_MESSAGE.URL_INPUT}
          onClick={() => showPrompt()}
        />
      </S.PostEditUrlLayout>

      <PostEditUrlPrompt
        onClose={closePrompt}
        onEdit={handleEditUrl}
        isShow={isShowPrompt}
        url={urlPath}
      />

      <ConfirmModal
        isShow={isShowConfirm}
        onClose={handleRemoveUrl}
        message={POST_EDIT_MODAL_MESSAGE.CONFIRM.URL}
      />
    </>
  )
}

export default PostEditUrl
