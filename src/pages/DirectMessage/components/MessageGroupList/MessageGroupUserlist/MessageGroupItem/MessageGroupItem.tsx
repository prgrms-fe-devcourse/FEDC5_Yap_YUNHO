import * as S from "./MessageGroupItem.Styles"
import { MessageGroupItemProps } from "@/pages/DirectMessage/DirectMessage.Types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import MessageProfile from "../MessageProfile/MessageProfile"
import PriorityHighIcon from "@mui/icons-material/PriorityHigh"
import decideChatUserName from "@/pages/DirectMessage/utils/decideChatUserName"

const MessageGroupItem = ({
  handleMessageGroupClick,
  messageGroupItem,
  selectedMessageGroupId,
}: MessageGroupItemProps) => {
  const { user } = useAuthUserStore()
  const { receiver, sender, message, createdAt } = messageGroupItem
  const others = decideChatUserName({
    myId: user._id,
    receiver,
    sender,
  })

  const { isOnline, image: profileImg, _id: othersUserId, fullName } = others

  return (
    <S.MessageGroupItemLayout
      onClick={() => {
        handleMessageGroupClick({
          myId: user._id,
          receiver,
          sender,
        })
      }}
      $isSelect={selectedMessageGroupId === othersUserId}
    >
      <S.MessageGroupItemLeftInfo>
        <MessageProfile
          isOnline={isOnline}
          profileImg={profileImg}
        />

        <S.MessageGroupItemTextInfo>
          <S.MessageGroupItemUserName>{fullName}</S.MessageGroupItemUserName>
          <S.MessageGroupItemContent>{message}</S.MessageGroupItemContent>
          <S.MessageGroupItemChatDate>
            {createdAt.slice(0, 10)}
          </S.MessageGroupItemChatDate>
        </S.MessageGroupItemTextInfo>
      </S.MessageGroupItemLeftInfo>
      <S.MessageGroupItemNotSeenCount>
        {!messageGroupItem.seen && <PriorityHighIcon />}
      </S.MessageGroupItemNotSeenCount>
    </S.MessageGroupItemLayout>
  )
}

export default MessageGroupItem
