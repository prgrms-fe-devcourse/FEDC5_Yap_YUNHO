import * as S from "./PostEditUrlPrompt.Styles"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import { ChangeEvent, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"
import CustomModal from "@/components/Modal/components/CustomModal/CustomModal"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { POST_EDIT_MODAL_MESSAGE } from "@/constants/modalMessage"
import { POST_EDIT_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"

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

  const removeInput = () => {
    setNewUrl("")
  }

  return (
    <CustomModal
      isShow={isShow}
      $height={30}
    >
      <S.PostEditUrlPromptLayout>
        <S.PostEditUrlPromptTitle>
          {POST_EDIT_MODAL_MESSAGE.PROMPT.URL}
        </S.PostEditUrlPromptTitle>

        <S.PostEditUrlErrorMessage>
          {checkError(isErrorUrl, newUrl)
            ? POST_EDIT_ERROR_MESSAGE.URL_PROMPT_ERROR_URL
            : ""}
        </S.PostEditUrlErrorMessage>

        {/* Url 제거 Button */}
        <S.PostEditRemoveInputLayout>
          <HighlightOffIcon onClick={removeInput} />
        </S.PostEditRemoveInputLayout>

        <S.PostEditUrlPromptInput
          value={newUrl}
          placeholder={POST_EDIT_PLACEHOLDER_MESSAGE.URL_PROMPT}
          onChange={handleChangeUrl}
        />

        <GS.ModalBottomActions>
          <GS.ModalButton onClick={handleCloseModal}>{"취소"}</GS.ModalButton>
          <GS.ModalButton
            onClick={handleSubmitUrl}
            disabled={isErrorUrl}
          >
            {"생성"}
          </GS.ModalButton>
        </GS.ModalBottomActions>
      </S.PostEditUrlPromptLayout>
    </CustomModal>
  )
}

export default PostEditUrlPrompt
