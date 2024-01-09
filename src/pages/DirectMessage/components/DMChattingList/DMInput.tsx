import * as S from "./DMInput.Styles"
import DMListProfile from "./../DMList/DMListProfile"
import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
import { useState } from "react"
import { AUTH_API } from "@/apis/Api"
interface DMInputProps {
  id: string
}

const DMInput = ({ id }: DMInputProps) => {
  const [message, setMessage] = useState("")
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    AUTH_API.post("messages/create", {
      message,
      receiver: id,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error, "메시지 전송 오류")
      })
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
        <S.DMInputButtonContainer>
          <Button $fontColor={`${theme.colors.sub_alt}`}>전송</Button>
        </S.DMInputButtonContainer>
      </S.DMInputForm>
    </S.DMInputLayout>
  )
}

export default DMInput
