import { AUTH_API } from "@/apis/Api"

interface SendMessageProps {
  message: string
  receiver: string
}

const sendMessageAPI = async (messageSubmission: SendMessageProps) => {
  const message = await AUTH_API.post("messages/create", messageSubmission)
    .then((res) => res.data)
    .catch(() => {
      throw new Error("메시지 보내기 요청 실패")
    })

  await AUTH_API.put("/messages/update-seen", {
    sender: messageSubmission.receiver,
  })
    .then()
    .catch(() => {})

  return message
}

export default sendMessageAPI
