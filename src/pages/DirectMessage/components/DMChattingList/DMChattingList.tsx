import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"

import { Message } from "@/types"
import useChattingList from "../../hooks/useChattingList"
import { useEffect, useRef, useCallback } from "react"
import DMInput from "./DMInput/DMInput"
import DMMessageItem from "./DMMessage/DMMessageItem"

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
          <DMInput id={id} />
        </>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
