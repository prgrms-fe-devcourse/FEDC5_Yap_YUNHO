import { useState } from "react"
import * as S from "./DMList.Styles"
import { DMUserListProps } from "../../types"
import { Conversation } from "@/types"
import { useNavigate } from "react-router-dom"
import decideChatUserName from "../../utils/decideChatUserName"
import { handleClickProps } from "./../../types/index"
import useDMList from "./../../hooks/useDMList"
import DMListItem from "./DMListItem"

const DMList = () => {
  const [selectedChattingId, setSelectedChattingId] = useState("")
  const navigate = useNavigate()
  const { isLoading, data: DMUserList } = useDMList()
  console.log(DMUserList)

  const handleClick = ({ user, receiver, sender }: handleClickProps) => {
    // 상대방의 아이디
    const { _id } = decideChatUserName(user, receiver, sender)
    navigate(`/directmessage/${_id}`)
    setSelectedChattingId(_id)
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
        {DMUserList?.map((user: DMUserListProps) => {
          return (
            <DMListItem
              key={user.createdAt}
              receiver={user.receiver}
              message={user.message}
              sender={user.sender}
              createdAt={user.createdAt}
              isSeen={user.isSeen}
              selectedChattingId={selectedChattingId}
              handleClick={handleClick}
            />
          )
        })}
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList
