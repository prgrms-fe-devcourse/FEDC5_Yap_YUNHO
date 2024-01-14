import * as S from "./MessageInput.Styles"
import MessageProfile from "../../MessageGroupList/MessageProfile"
import { useEffect, useState } from "react"
import useSendMessage from "../../../hooks/useSendMessage"
import SendIcon from "@mui/icons-material/Send"
import { AUTH_API } from "@/apis/Api"

interface MessageInputProps {
  othersUserId: string
}

const MessageInput = ({ othersUserId }: MessageInputProps) => {
  const [sendingMessage, setSendingMessage] = useState("")
  const { AlertModalComponent, sendMessage } = useSendMessage()
  const [myProfileImg, setMyProfileImg] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSendingMessage(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageSubmission = {
      message: sendingMessage,
      receiver: othersUserId,
    }
    sendMessage.mutate(messageSubmission)
    setSendingMessage("")
  }

  const getMyProfileImg = async () => {
    const { image } = await AUTH_API.get(`/auth-user`)
      .then((res) => res.data)
      .catch((e) => {
        console.log(e, "이미지 요청 실패")
      })
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
            placeholder="메시지를 입력해주세요"
            onChange={handleInputChange}
            value={sendingMessage}
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
