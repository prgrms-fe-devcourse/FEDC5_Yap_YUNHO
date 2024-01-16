import { useParams } from "react-router-dom"
import * as S from "./MessageList.Styles"
import { Message } from "@/types"
import useMessageList from "../../hooks/useMessageList"
import { useEffect, useRef } from "react"
import MessageInput from "./MessageInput/MessageInput"
import MessageItem from "./MessageItem/MessageItem"

const MessageList = () => {
  const { userId: othersUserId } = useParams()
  const { data: MessageList } = useMessageList(othersUserId || "")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [MessageList])

  return (
    <S.MessageListLayout>
      {othersUserId && MessageList && (
        <>
          <S.MessageListContainer ref={scrollRef}>
            {MessageList.map((list: Message) => (
              <MessageItem
                key={list.createdAt}
                othersUserId={othersUserId}
                messageData={list}
              />
            ))}
          </S.MessageListContainer>
          <MessageInput othersUserId={othersUserId} />
        </>
      )}
    </S.MessageListLayout>
  )
}
export default MessageList
