import { POST_EDIT_EDITOR_PLACEHOLDER } from "@/components/PostEdit/constants/PostEdit.Constants"
import * as S from "./PostEditPrompt.Styles"
import * as GS from "@/components/Modal/ModalGlobal.Styles"
import { ChangeEvent, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { POST_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

interface PostEditPromptProps {
  onClose: () => void
  onEdit: (newUrl: string) => void
  url: string
}

const PostEditPrompt = ({ onClose, onEdit, url }: PostEditPromptProps) => {
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
    // 혹시 모를 방어코드
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
    <S.PostEditPromptLayout>
      <S.PostEditPromptTitle>
        등록하실 URL을 입력하신 후 등록 버튼을 눌러주세요!
      </S.PostEditPromptTitle>

      <S.PostEditUrlErrorMessage>
        {isErrorUrl ? POST_EDIT_ERROR_MESSAGE.URL_PROMPT_ERROR_URL : ""}
      </S.PostEditUrlErrorMessage>

      <S.PostEditPromptInput
        value={newUrl}
        placeholder={POST_EDIT_EDITOR_PLACEHOLDER.URL_PROMPT}
        onChange={handleChangeUrl}
      />
      <GS.ModalBottomActions>
        <GS.ModalButton onClick={handleCloseModal}>취소</GS.ModalButton>
        <GS.ModalButton
          onClick={handleSubmitUrl}
          disabled={isErrorUrl}
        >
          등록
        </GS.ModalButton>
      </GS.ModalBottomActions>
    </S.PostEditPromptLayout>
  )
}

export default PostEditPrompt
