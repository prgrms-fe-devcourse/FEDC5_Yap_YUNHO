import { useState } from "react"
import * as S from "./DMList.Styles"
import { Conversation } from "@/types"
import { useNavigate } from "react-router-dom"
import decideChatUserName from "../../utils/decideChatUserName"
import useDMList from "./../../hooks/useDMList"
import DMListItem from "./DMListItem"
import { handleClickProps } from "./../../DirectMessage.Types"

const DMList = () => {
  const [selectedMessageId, setSelectedMessageId] = useState("")
  const navigate = useNavigate()
  const { data: DMUserList } = useDMList()

  const handleClick = ({ user, receiver, sender }: handleClickProps) => {
    // 상대방의 아이디
    const { _id: othersId } = decideChatUserName(user, receiver, sender)

    navigate(`/directmessage/${othersId}`)
    setSelectedMessageId(othersId)
  }

  const DMListCount = {
    total: DMUserList?.length,
    NotNotice: DMUserList?.filter((list: Conversation) => {
      return !list.seen
    }).length,
  }

  return (
    <S.DMListLayout>
      <S.DMListInfo>
        <S.DMListTotalNoticeTitle>DM 목록</S.DMListTotalNoticeTitle>
        <S.DMListTotalNoticeNumber>
          {DMListCount.total}
        </S.DMListTotalNoticeNumber>
        <S.DMListNotNoticeTitle>안 읽음</S.DMListNotNoticeTitle>
        <S.DMListNotNoticedNumber>
          {DMListCount.NotNotice}
        </S.DMListNotNoticedNumber>
      </S.DMListInfo>
      <S.DMListContainer>
        {DMUserList?.map((user: Conversation) => {
          return (
            <DMListItem
              key={user.createdAt}
              receiver={user.receiver}
              message={user.message}
              sender={user.sender}
              createdAt={user.createdAt}
              isSeen={user.seen}
              selectedMessageId={selectedMessageId}
              handleClick={handleClick}
            />
          )
        })}
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList
