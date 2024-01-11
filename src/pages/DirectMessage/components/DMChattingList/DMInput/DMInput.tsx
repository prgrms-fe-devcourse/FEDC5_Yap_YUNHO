import * as S from "./DMInput.Styles"
import DMListProfile from "../../DMList/DMListProfile"
import { useState } from "react"
import useSendMessage from "../../../hooks/useSendMessage"
import SendIcon from "@mui/icons-material/Send"

interface DMInputProps {
  othersId: string
  scrollToBottom: () => void
}

const DMInput = ({ othersId, scrollToBottom }: DMInputProps) => {
  const [sendingMessage, setSendingMessage] = useState("")
  const { mutate: sendMessage } = useSendMessage()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSendingMessage(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageSubmission = {
      message: sendingMessage,
      receiver: othersId,
    }
    await sendMessage(messageSubmission)
    setSendingMessage("")
    setTimeout(() => {
      scrollToBottom()
    }, 200)
  }

  return (
    <S.DMInputLayout>
      <S.DMInputForm onSubmit={handleSubmit}>
        <DMListProfile />
        <S.DMInputItem
          placeholder="메시지를 입력해주세요"
          onChange={handleInputChange}
          value={sendingMessage}
        />
        <S.DMSendButton>
          <SendIcon />
        </S.DMSendButton>
      </S.DMInputForm>
    </S.DMInputLayout>
  )
}

export default DMInput
