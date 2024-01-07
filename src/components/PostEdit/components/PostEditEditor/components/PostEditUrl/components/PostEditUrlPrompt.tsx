import {
  POST_EDIT_EDITOR_PLACEHOLDER,
  POST_EDIT_MODAL_MESSAGE,
} from "@/components/PostEdit/constants/PostEdit.Constants"
import * as S from "./PostEditUrlPrompt.Styles"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import { ChangeEvent, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

interface PostEditUrlPromptProps {
  onClose: () => void
  onEdit: (newUrl: string) => void
  url: string
}

const PostEditUrlPrompt = ({
  onClose,
  onEdit,
  url,
}: PostEditUrlPromptProps) => {
  const [newUrl, setNewUrl] = useState(url)
  const [isErrorUrl, setIsErrorUrl] = useState(true)

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

  return (
    <S.PostEditUrlPromptLayout>
      <S.PostEditUrlPromptTitle>
        {POST_EDIT_MODAL_MESSAGE.URL_PROMPT}
      </S.PostEditUrlPromptTitle>

      <S.PostEditUrlErrorMessage>
        {isErrorUrl ? POST_EDIT_ERROR_MESSAGE.URL_PROMPT_ERROR_URL : ""}
      </S.PostEditUrlErrorMessage>

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
  )
}

export default PostEditUrlPrompt
