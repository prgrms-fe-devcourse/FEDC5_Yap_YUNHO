import {
  POST_EDIT_EDITOR_PLACEHOLDER,
  POST_EDIT_MODAL_MESSAGE,
} from "@/components/PostEdit/constants/PostEdit.Constants"
import * as S from "./PostEditUrlPrompt.Styles"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import { ChangeEvent, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"
import CustomModal from "@/components/Modal/components/CustomModal/CustomModal"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

interface PostEditUrlPromptProps {
  isShow: boolean
  onClose: () => void
  onEdit: (newUrl: string) => void
  url: string
}

const PostEditUrlPrompt = ({
  onClose,
  onEdit,
  isShow,
  url,
}: PostEditUrlPromptProps) => {
  const [newUrl, setNewUrl] = useState(url)
  const [isErrorUrl, setIsErrorUrl] = useState(false)

  useEffect(() => {
    const checkUrl = ReactPlayer.canPlay(url)

    setIsErrorUrl(!checkUrl)
    setNewUrl(url)
  }, [url])

  const handleChangeUrl = ({ target }: ChangeEvent) => {
    if (!(target instanceof HTMLTextAreaElement)) {
      return
    }

    const { value } = target
    const checkUrl = ReactPlayer.canPlay(value)

    setIsErrorUrl(!checkUrl)
    setNewUrl(value)
  }

  const handleSubmitUrl = () => {
    if (isErrorUrl) {
      return
    }

    onEdit(newUrl)
    onClose()
  }

  const handleCloseModal = () => {
    setNewUrl(url)
    onClose()
  }

  const checkError = (isError: boolean, checkUrl: string) => {
    if (isError && checkUrl.length !== 0) {
      return true
    }
    return false
  }

  return (
    <CustomModal
      isShow={isShow}
      $height={30}
    >
      <S.PostEditUrlPromptLayout>
        <S.PostEditUrlPromptTitle>
          {POST_EDIT_MODAL_MESSAGE.URL_PROMPT}
        </S.PostEditUrlPromptTitle>

        <S.PostEditUrlErrorMessage>
          {checkError(isErrorUrl, newUrl)
            ? POST_EDIT_ERROR_MESSAGE.URL_PROMPT_ERROR_URL
            : ""}
        </S.PostEditUrlErrorMessage>

        <S.PostEditRemoveInputLayout>
          <HighlightOffIcon />
        </S.PostEditRemoveInputLayout>
        <S.PostEditUrlPromptInput
          value={newUrl}
          placeholder={POST_EDIT_EDITOR_PLACEHOLDER.URL_PROMPT}
          onChange={handleChangeUrl}
        />

        <GS.ModalBottomActions>
          <GS.ModalButton onClick={handleCloseModal}>{"취소"}</GS.ModalButton>
          <GS.ModalButton
            onClick={handleSubmitUrl}
            disabled={isErrorUrl}
          >
            {"등록"}
          </GS.ModalButton>
        </GS.ModalBottomActions>
      </S.PostEditUrlPromptLayout>
    </CustomModal>
  )
}

export default PostEditUrlPrompt
