import * as S from "./DMInput.Styles"
import DMListProfile from "../../DMList/DMListProfile"
import { useState } from "react"
import useSendMessage from "../../../hooks/useSendMessage"
import SendIcon from "@mui/icons-material/Send"

interface DMInputProps {
  id: string
}

const DMInput = ({ id }: DMInputProps) => {
  const [message, setMessage] = useState("")
  const { mutate: sendMessage } = useSendMessage()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageSubmission = {
      message,
      receiver: id,
    }
    sendMessage(messageSubmission)
    setMessage("")
  }

  return (
    <S.DMInputLayout>
      <S.DMInputForm onSubmit={handleSubmit}>
        <DMListProfile />
        <S.DMInputItem
          placeholder="메시지를 입력해주세요"
          onChange={handleInputChange}
          value={message}
        />
        <S.DMSendButton>
          <SendIcon />
        </S.DMSendButton>
      </S.DMInputForm>
    </S.DMInputLayout>
  )
}

export default DMInput
