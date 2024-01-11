import { useState } from "react"
import * as S from "./DMList.Styles"
import { Conversation, User } from "@/types"
import { useNavigate } from "react-router-dom"
import decideChatUserName from "../../utils/decideChatUserName"
import useDMList from "./../../hooks/useDMList"
import DMListItem from "./DMListItem"
import { handleClickProps } from "./../../DirectMessage.Types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { AUTH_API } from "@/apis/Api"

const DMList = () => {
  const [selectedMessageId, setSelectedMessageId] = useState("")
  const navigate = useNavigate()
  const { data: DMUserList } = useDMList()
  const { user: me } = useAuthUserStore()

  const readCheckMessage = async (others: User) => {
    try {
      await AUTH_API.put("/messages/update-seen", {
        sender: others._id,
      })
    } catch (e) {
      console.log(e, "메시지 읽음 처리 오류")
    }
  }
  console.log(DMUserList)

  const handleClick = ({ user, receiver, sender }: handleClickProps) => {
    // 상대방의 아이디
    const others = decideChatUserName(user, receiver, sender)

    navigate(`/directmessage/${others._id}`)
    setSelectedMessageId(others._id)
    readCheckMessage(others)
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
          const { receiver, sender } = user
          const others = decideChatUserName(me, receiver, sender)

          return (
            <DMListItem
              key={user.createdAt}
              receiver={user.receiver}
              message={user.message}
              sender={user.sender}
              createdAt={user.createdAt}
              isOnline={others.isOnline}
              selectedMessageId={selectedMessageId}
              handleClick={handleClick}
              profileImg={others.image}
            />
          )
        })}
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList

// 최근 메시지가 내가 보낸거면 seen을 true로, 아니면 false로
