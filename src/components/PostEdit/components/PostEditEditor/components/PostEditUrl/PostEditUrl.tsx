import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditUrl.Styles"
import useModal from "@/components/Modal/hooks/useModal"
import SmallModal from "@/components/Modal/SmallModal"
import PostEditPrompt from "./components/PostEditPrompt"
import DeleteIcon from "@mui/icons-material/Delete"
import { POST_EDIT_EDITOR_PLACEHOLDER } from "@/components/PostEdit/constants/PostEdit.Constants"

interface PostEditUrlProps {
  urlPath: string
  onEdit: HandleEditPost
}

const PostEditUrl = ({ urlPath, onEdit }: PostEditUrlProps) => {
  const { isModalToggle, showModal, closeModal } = useModal()

  const handleEditUrl = (newUrl: string) => {
    onEdit({
      type: "mediaUrl",
      value: newUrl,
    })
  }

  return (
    <>
      <S.PostEditUrlLayout>
        <S.PostEditUrlTitle>
          <S.PostEitUrlTitleText> 영상 URL</S.PostEitUrlTitleText>
          <DeleteIcon />
        </S.PostEditUrlTitle>
        <S.PostEditUrlInput
          readOnly
          value={urlPath}
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
          onEdit={handleEditUrl}
          url={urlPath}
        />
      </SmallModal>
    </>
  )
}

export default PostEditUrl
