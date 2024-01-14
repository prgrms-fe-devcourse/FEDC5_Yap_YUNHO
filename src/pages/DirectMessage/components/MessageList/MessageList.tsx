import { useParams } from "react-router-dom"
import * as S from "./MessageList.Styles"
import { Message } from "@/types"
import useMessageList from "../../hooks/useMessageList"
import { useEffect, useRef } from "react"
import MessageInput from "./MessageInput/MessageInput"
import MessageItem from "./MessageItem/MessageItem"

const MessageList = () => {
  const { id: othersUserId } = useParams()
  const { data: MessageList } = useMessageList(othersUserId || "")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  // 내가 메시지를 보낼때, 상대방에게 메시지를 받을때 스크롤 이동
  useEffect(() => {
    scrollToBottom()
  }, [MessageList?.length])

  return (
    <S.MessageListLayout>
      {othersUserId && (
        <>
          <S.MessageListContainer ref={scrollRef}>
            {MessageList?.map((list: Message) => (
              <MessageItem
                key={list.createdAt}
                othersUserId={othersUserId}
              >
                {list}
              </MessageItem>
            ))}
          </S.MessageListContainer>
          <MessageInput othersUserId={othersUserId} />
        </>
      )}
    </S.MessageListLayout>
  )
}
export default MessageList
