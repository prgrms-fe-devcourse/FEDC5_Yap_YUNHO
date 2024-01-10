import * as S from "./DMInput.Styles"
import DMListProfile from "./../DMList/DMListProfile"
import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import { useState } from "react"
import useSendMessage from "../../hooks/useSendMessage"

interface DMInputProps {
  id: string
  onChildSubmit: () => void
}

const DMInput = ({ id, onChildSubmit }: DMInputProps) => {
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
    onChildSubmit()
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
        <S.DMInputButtonContainer>
          <Button $fontColor={`${theme.colors.sub_alt}`}>전송</Button>
        </S.DMInputButtonContainer>
      </S.DMInputForm>
    </S.DMInputLayout>
  )
}

export default DMInput
