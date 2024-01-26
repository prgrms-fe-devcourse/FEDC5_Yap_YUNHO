import * as S from "./MessageGroupUserlist.Styles"
import { handleMessageGroupClickProps } from "../../../DirectMessage.Types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import decideChatUserName from "@/pages/DirectMessage/utils/decideChatUserName"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { AUTH_API } from "@/apis/Api"
import { User, Conversation } from "@/types"
import MessageGroupItem from "./MessageGroupItem/MessageGroupItem"

interface MessageGroupUserListProps {
  MessageGroupList: Conversation[]
}

const MessageGroupUserList = ({
  MessageGroupList,
}: MessageGroupUserListProps) => {
  const [selectedMessageGroupId, setSelectedMessageGroupId] = useState("")
  const navigate = useNavigate()

  const updateSeenMessage = async (others: User) => {
    await AUTH_API.put("/messages/update-seen", {
      sender: others._id,
    })
  }

  const handleMessageGroupClick = ({
    myId,
    receiver,
    sender,
  }: handleMessageGroupClickProps) => {
    const others = decideChatUserName({ myId, receiver, sender })
    navigate(`/directmessage/${others._id}`)
    setSelectedMessageGroupId(others._id)
    updateSeenMessage(others)
  }

  return (
    <S.MessageGroupListContainer>
      {MessageGroupList?.map((messageGroupItem: Conversation) => {
        return (
          <MessageGroupItem
            handleMessageGroupClick={handleMessageGroupClick}
            messageGroupItem={messageGroupItem}
            selectedMessageGroupId={selectedMessageGroupId}
          />
        )
      })}
    </S.MessageGroupListContainer>
  )
}

export default MessageGroupUserList
