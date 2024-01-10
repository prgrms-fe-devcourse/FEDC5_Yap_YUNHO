import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"

import { Message } from "@/types"
import useChattingList from "../../hooks/useChattingList"
import { useRef } from "react"
import DMInput from "./DMInput/DMInput"
import DMMessageItem from "./DMMessage/DMMessageItem"

const DMChattingList = () => {
  const { id } = useParams()
  const { data: MessageList } = useChattingList(id || "")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  return (
    <S.DMChattingListLayout>
      {id && (
        <>
          <S.DMMessageList ref={scrollRef}>
            {MessageList?.map((list: Message) => (
              <DMMessageItem
                key={list.createdAt}
                id={id}
                scrollToBottom={scrollToBottom}
              >
                {list}
              </DMMessageItem>
            ))}
          </S.DMMessageList>
          <DMInput
            id={id}
            scrollToBottom={scrollToBottom}
          />
        </>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
