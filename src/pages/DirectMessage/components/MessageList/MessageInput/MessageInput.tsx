import * as S from "./MessageInput.Styles"
import MessageProfile from "../../MessageGroupList/MessageProfile"
import { useEffect, useState } from "react"
import SendIcon from "@mui/icons-material/Send"
import { AUTH_API } from "@/apis/Api"
import { DM_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"
import useTextArea from "@/pages/DirectMessage/hooks/useTextArea"

const MessageInput = () => {
  const [myProfileImg, setMyProfileImg] = useState("")
  const {
    textValue,
    handleInputChange,
    handleSubmit,
    textRef,
    AlertModalComponent,
    handleEnter,
  } = useTextArea()

  const getMyProfileImg = async () => {
    const { image } = await AUTH_API.get(`/auth-user`).then((res) => res.data)
    setMyProfileImg(image)
  }

  useEffect(() => {
    getMyProfileImg()
  }, [])

  return (
    <>
      {AlertModalComponent}
      <S.MessageInputLayout>
        <S.MessageInputForm onSubmit={handleSubmit}>
          <MessageProfile profileImg={myProfileImg} />
          <S.MessageInputItem
            ref={textRef}
            placeholder={DM_PLACEHOLDER_MESSAGE.SEND_MESSAGE_INPUT}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
            value={textValue}
          />
          <S.MessageSendButton>
            <SendIcon />
          </S.MessageSendButton>
        </S.MessageInputForm>
      </S.MessageInputLayout>
    </>
  )
}

export default MessageInput
