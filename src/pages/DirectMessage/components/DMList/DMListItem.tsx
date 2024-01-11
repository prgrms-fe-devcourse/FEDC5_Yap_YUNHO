import * as S from "./DMList.Styles"
import { DMUserListProps } from "../../DirectMessage.Types"
import DMListProfile from "./DMListProfile"
import useAuthUserStore from "@/stores/useAuthUserStore"
import decideChatUserName from "../../utils/decideChatUserName"

const DMListItem = ({
  receiver,
  sender,
  message,
  createdAt,
  isOnline,
  handleClick,
  selectedMessageId,
  profileImg,
}: DMUserListProps) => {
  const { myId } = useAuthUserStore()

  return (
    <S.DMListItemLayout
      onClick={() => {
        handleClick({ myId, receiver, sender })
      }}
      $isSelect={
        selectedMessageId === decideChatUserName(myId, receiver, sender)._id
      }
    >
      <DMListProfile
        isOnline={isOnline}
        profileImg={profileImg}
      />

      <S.DMListChat>
        <S.DMListChatUserName>
          {decideChatUserName(myId, receiver, sender).fullName}
        </S.DMListChatUserName>
        <S.DMListChatContent>{message}</S.DMListChatContent>
        <S.DMListChatDate>{createdAt.slice(0, 10)}</S.DMListChatDate>
      </S.DMListChat>
    </S.DMListItemLayout>
  )
}

export default DMListItem
