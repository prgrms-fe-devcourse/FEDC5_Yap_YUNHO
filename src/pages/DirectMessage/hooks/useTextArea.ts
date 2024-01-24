import { useRef, useState } from "react"
import useSendMessage from "./useSendMessage"
import { useParams } from "react-router-dom"

type EventType =
  | React.KeyboardEvent<HTMLTextAreaElement>
  | React.FormEvent<HTMLFormElement>

const useTextArea = () => {
  const [textValue, setTextValue] = useState("")
  const { AlertModalComponent, sendMessage } = useSendMessage()
  const { userId: othersUserId } = useParams()
  const textRef = useRef<HTMLTextAreaElement>(null)

  const resize = () => {
    if (!textRef.current) {
      return
    }

    textRef.current.style.height = "0px"

    const scrollHeight = textRef.current.scrollHeight
    const style = window.getComputedStyle(textRef.current)
    const borderTop = parseInt(style.borderTop)
    const borderBottom = parseInt(style.borderBottom)

    textRef.current.style.height =
      scrollHeight + borderTop + borderBottom + "px"
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { value } = e.target
    const { current } = textRef

    if (!current) {
      return
    }

    setTextValue(value)
    resize()
  }

  const handleSubmit = (e: EventType): void => {
    e.preventDefault()
    if (!othersUserId) {
      return
    }

    const messageSubmission = {
      message: textValue,
      receiver: othersUserId,
    }

    setTextValue("")
    sendMessage.mutate(messageSubmission)
    resize()
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 조합중일 경우 이벤트 막음
    if (e.nativeEvent.isComposing) {
      return
    }

    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e)
    }
  }

  return {
    textValue,
    handleInputChange,
    handleSubmit,
    AlertModalComponent,
    textRef,
    handleEnter,
  }
}

export default useTextArea
