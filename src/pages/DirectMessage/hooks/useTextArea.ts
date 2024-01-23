import { useState } from "react"
import useSendMessage from "./useSendMessage"
import { useParams } from "react-router-dom"

const useTextArea = () => {
  const [textValue, setTextValue] = useState("")
  const { AlertModalComponent, sendMessage } = useSendMessage()
  const { userId: othersUserId } = useParams()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { value } = e.target
    if (!value) {
      return
    }

    setTextValue(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!othersUserId) {
      return
    }

    const messageSubmission = {
      message: textValue,
      receiver: othersUserId,
    }

    sendMessage.mutate(messageSubmission)
    setTextValue("")
  }

  return { textValue, handleInputChange, handleSubmit, AlertModalComponent }
}

export default useTextArea
