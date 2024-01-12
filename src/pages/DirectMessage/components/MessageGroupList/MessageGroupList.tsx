import { useState } from "react"
import * as S from "./MessageList.Styles"
import { Conversation, User } from "@/types"
import { useNavigate } from "react-router-dom"
import decideChatUserName from "../../utils/decideChatUserName"
import useDMList from "../../hooks/useDMList"
import MessageGroupItem from "./MessageGroupItem"
import { handleClickProps } from "../../DirectMessage.Types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { AUTH_API } from "@/apis/Api"

const MessageGroupList = () => {
  const [selectedMessageId, setSelectedMessageId] = useState("")
  const navigate = useNavigate()
  const { data: MessageGroupList } = useDMList()
  const { myId } = useAuthUserStore()

  const updateSeenMessage = async (others: User) => {
    try {
      await AUTH_API.put("/messages/update-seen", {
        sender: others._id,
      })
    } catch (e) {
      console.log(e, "메시지 읽음 처리 오류")
    }
  }

  const handleClick = ({ myId, receiver, sender }: handleClickProps) => {
    // 상대방의 아이디
    const others = decideChatUserName(myId, receiver, sender)

    navigate(`/directmessage/${others._id}`)
    setSelectedMessageId(others._id)
    updateSeenMessage(others)
  }

  const MessageGroupListCount = {
    total: MessageGroupList?.length,
    NotSeen: MessageGroupList?.filter((list: Conversation) => {
      return !list.seen
    }).length,
  }

  return (
    <S.MessageGroupListLayout>
      <S.MessageGroupListInfo>
        <S.MessageGroupListSeenTitle>DM 목록</S.MessageGroupListSeenTitle>
        <S.MessageGroupListTotalSeenNumber>
          {MessageGroupListCount.total}
        </S.MessageGroupListTotalSeenNumber>
        <S.MessageGroupListNotSeenTitle>안 읽음</S.MessageGroupListNotSeenTitle>
        <S.MessageGroupListNotSeenNumber>
          {MessageGroupListCount.NotSeen}
        </S.MessageGroupListNotSeenNumber>
      </S.MessageGroupListInfo>
      <S.MessageGroupListContainer>
        {MessageGroupList?.map((user: Conversation) => {
          const { receiver, sender } = user
          const others = decideChatUserName(myId, receiver, sender)

          return (
            <MessageGroupItem
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
      </S.MessageGroupListContainer>
    </S.MessageGroupListLayout>
  )
}
export default MessageGroupList
