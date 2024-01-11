import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"

import { Message } from "@/types"
import useChattingList from "../../hooks/useChattingList"
import { useRef } from "react"
import DMInput from "./DMInput/DMInput"
import DMMessageItem from "./DMMessage/DMMessageItem"

const DMChattingList = () => {
  const { id: othersId } = useParams()
  const { data: MessageList } = useChattingList(othersId || "")
  const scrollRef = useRef<HTMLDivElement>(null)
  console.log(MessageList)
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  return (
    <S.DMChattingListLayout>
      {othersId && (
        <>
          <S.DMMessageList ref={scrollRef}>
            {MessageList?.map((list: Message) => (
              <DMMessageItem
                key={list.createdAt}
                othersId={othersId}
                scrollToBottom={scrollToBottom}
              >
                {list}
              </DMMessageItem>
            ))}
          </S.DMMessageList>
          <DMInput
            othersId={othersId}
            scrollToBottom={scrollToBottom}
          />
        </>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
