import { AUTH_API } from "@/apis/Api"

interface SendMessageProps {
  message: string
  receiver: string
}

const sendMessageAPI = async (messageSubmission: SendMessageProps) => {
  const message = await AUTH_API.post("messages/create", messageSubmission)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e)
    })

  await AUTH_API.put("/messages/update-seen", {
    sender: messageSubmission.receiver,
  })
    .then()
    .catch(() => {})

  return message
}

export default sendMessageAPI
