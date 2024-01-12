import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"

import { Message } from "@/types"
import useChattingList from "../../hooks/useChattingList"
import { useEffect, useRef } from "react"
import DMInput from "./DMInput/DMInput"
import DMMessageItem from "./DMMessage/DMMessageItem"

const DMChattingList = () => {
  const { id: othersId } = useParams()
  const { data: MessageList } = useChattingList(othersId || "")
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
    <S.DMChattingListLayout>
      {othersId && (
        <>
          <S.DMMessageList ref={scrollRef}>
            {MessageList?.map((list: Message) => (
              <DMMessageItem
                key={list.createdAt}
                othersId={othersId}
              >
                {list}
              </DMMessageItem>
            ))}
          </S.DMMessageList>
          <DMInput othersId={othersId} />
        </>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
