import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"
import DMMessageItem from "./DMMessageItem"
import { Message } from "@/types"
import DMInput from "./DMInput"
import useChattingList from "../../hooks/useChattingList"

const DMChattingList = () => {
  const { id } = useParams()

  const { data: MessageList } = useChattingList(id || "")

  return (
    <S.DMChattingListLayout>
      {id && (
        <>
          <S.DMMessageList>
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
