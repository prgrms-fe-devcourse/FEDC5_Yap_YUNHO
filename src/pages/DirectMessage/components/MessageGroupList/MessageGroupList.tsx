import { useState } from "react"
import * as S from "./MessageList.Styles"
import { Conversation, User } from "@/types"
import decideChatUserName from "../../utils/decideChatUserName"
import useMessageGroupList from "../../hooks/useMessageGroupList"
import MessageGroupItem from "./MessageGroupItem"
import { handleMessageGroupClickProps } from "../../DirectMessage.Types"
import { AUTH_API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"

const MessageGroupList = () => {
  const [selectedMessageGroupId, setSelectedMessageGroupId] = useState("")
  const { data: MessageGroupList } = useMessageGroupList()
  const { user } = useAuthUserStore()

  const updateSeenMessage = async (others: User) => {
    try {
      await AUTH_API.put("/messages/update-seen", {
        sender: others._id,
      })
    } catch (e) {
      console.error(e, "메시지 읽음 처리 오류")
    }
  }

  const handleMessageGroupClick = ({
    myId,
    receiver,
    sender,
  }: handleMessageGroupClickProps) => {
    const others = decideChatUserName({ myId, receiver, sender })

    setSelectedMessageGroupId(others._id)
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
        {MessageGroupList?.map((messageGroupItem: Conversation) => {
          const { receiver, sender } = messageGroupItem

          const others = decideChatUserName({
            myId: user._id,
            receiver,
            sender,
          })

          return (
            <MessageGroupItem
              messageGroupItem={messageGroupItem}
              others={others}
              key={messageGroupItem.createdAt}
              selectedMessageGroupId={selectedMessageGroupId}
              handleMessageGroupClick={handleMessageGroupClick}
            />
          )
        })}
      </S.MessageGroupListContainer>
    </S.MessageGroupListLayout>
  )
}
export default MessageGroupList
