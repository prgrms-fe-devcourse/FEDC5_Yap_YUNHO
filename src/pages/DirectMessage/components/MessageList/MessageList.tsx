import { useParams } from "react-router-dom"
import * as S from "./MessageList.Styles"
import { Message } from "@/types"
import useMessageList from "../../hooks/useMessageList"
import { useEffect, useRef } from "react"
import MessageInput from "./MessageInput/MessageInput"
import MessageItem from "./MessageItem/MessageItem"

const MessageList = () => {
  const { id: othersId } = useParams()
  const { data: MessageList } = useMessageList(othersId || "")
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
      {othersId && (
        <>
          <S.MessageListContainer ref={scrollRef}>
            {MessageList?.map((list: Message) => (
              <MessageItem
                key={list.createdAt}
                othersId={othersId}
              >
                {list}
              </MessageItem>
            ))}
          </S.MessageListContainer>
          <MessageInput othersId={othersId} />
        </>
      )}
    </S.MessageListLayout>
  )
}
export default MessageList
