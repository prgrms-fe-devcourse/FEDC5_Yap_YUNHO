import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"
import DMMessageItem from "./DMMessageItem"
import { Message } from "@/types"
import DMInput from "./DMInput"
import useChattingList from "../../hooks/useChattingList"
import { useEffect, useRef, useCallback } from "react"

const DMChattingList = () => {
  const { id } = useParams()
  const { data: MessageList } = useChattingList(id || "")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
    // 문자가 추가가 될때만 스크롤 맨 아래로 이동
  }, [MessageList?.length, scrollToBottom])

  return (
    <S.DMChattingListLayout>
      {id && (
        <>
          <S.DMMessageList ref={scrollRef}>
            {MessageList?.map((list: Message) => (
              <DMMessageItem
                key={list.createdAt}
                id={id}
              >
                {list}
              </DMMessageItem>
            ))}
          </S.DMMessageList>
          <DMInput
            id={id}
            onChildSubmit={scrollToBottom}
          />
        </>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
