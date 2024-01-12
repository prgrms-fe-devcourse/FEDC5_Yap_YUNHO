import * as S from "./MessageList.Styles"
import { MessageUserListProps } from "../../DirectMessage.Types"
import MessageProfile from "./MessageProfile"
import useAuthUserStore from "@/stores/useAuthUserStore"
import decideChatUserName from "../../utils/decideChatUserName"

const MessageGroupItem = ({
  receiver,
  sender,
  message,
  createdAt,
  isOnline,
  handleClick,
  selectedMessageId,
  profileImg,
}: MessageUserListProps) => {
  const { myId } = useAuthUserStore()

  return (
    <S.MessageItemLayout
      onClick={() => {
        handleClick({ myId, receiver, sender })
      }}
      $isSelect={
        selectedMessageId === decideChatUserName(myId, receiver, sender)._id
      }
    >
      <MessageProfile
        isOnline={isOnline}
        profileImg={profileImg}
      />

      <S.MessageGroupItemChat>
        <S.MessageGroupItemUserName>
          {decideChatUserName(myId, receiver, sender).fullName}
        </S.MessageGroupItemUserName>
        <S.MessageGroupItemContent>{message}</S.MessageGroupItemContent>
        <S.MessageGroupItemChatDate>
          {createdAt.slice(0, 10)}
        </S.MessageGroupItemChatDate>
      </S.MessageGroupItemChat>
    </S.MessageItemLayout>
  )
}

export default MessageGroupItem
