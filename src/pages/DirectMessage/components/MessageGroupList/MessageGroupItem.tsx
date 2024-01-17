import * as S from "./MessageGroupList.Styles"
import { MessageGroupItemProps } from "../../DirectMessage.Types"
import MessageProfile from "./MessageProfile"
import useAuthUserStore from "@/stores/useAuthUserStore"
import MessageGroupItemRightInfo from "./MessageGroupRightInfo"

const MessageGroupItem = ({
  messageGroupItem,
  handleMessageGroupClick,
  selectedMessageGroupId,
  others,
}: MessageGroupItemProps) => {
  const { user } = useAuthUserStore()
  const { receiver, sender, message, createdAt } = messageGroupItem
  const { isOnline, image: profileImg, _id: othersUserId, fullName } = others

  return (
    <S.MessageItemLayout
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

        <S.MessageGroupTextInfo>
          <S.MessageGroupItemUserName>{fullName}</S.MessageGroupItemUserName>
          <S.MessageGroupItemContent>{message}</S.MessageGroupItemContent>
          <S.MessageGroupItemChatDate>
            {createdAt.slice(0, 10)}
          </S.MessageGroupItemChatDate>
        </S.MessageGroupTextInfo>
      </S.MessageGroupItemLeftInfo>
      <MessageGroupItemRightInfo messageGroupItem={messageGroupItem} />
    </S.MessageItemLayout>
  )
}

export default MessageGroupItem
