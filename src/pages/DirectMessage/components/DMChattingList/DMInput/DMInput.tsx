import * as S from "./DMInput.Styles"
import MessageProfile from "../../MessageGroupList/MessageProfile"
import { useEffect, useState } from "react"
import useSendMessage from "../../../hooks/useSendMessage"
import SendIcon from "@mui/icons-material/Send"
import { AUTH_API } from "@/apis/Api"

interface DMInputProps {
  othersId: string
}

const DMInput = ({ othersId }: DMInputProps) => {
  const [sendingMessage, setSendingMessage] = useState("")
  const { mutate: sendMessage } = useSendMessage()
  const [myProfileImg, setMyProfileImg] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSendingMessage(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageSubmission = {
      message: sendingMessage,
      receiver: othersId,
    }
    sendMessage(messageSubmission)
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
    <S.DMInputLayout>
      <S.DMInputForm onSubmit={handleSubmit}>
        <MessageProfile profileImg={myProfileImg} />
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
