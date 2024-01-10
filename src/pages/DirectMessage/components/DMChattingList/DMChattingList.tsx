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
      console.log(scrollRef.current.scrollHeight)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

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
