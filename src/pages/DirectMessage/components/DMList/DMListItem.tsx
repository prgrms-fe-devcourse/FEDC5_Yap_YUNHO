import * as S from "./DMList.Styles"
import { DMUserListProps } from "./../../types"
import DMListProfile from "./DMListProfile"
import useAuthUserStore from "@/stores/useAuthUserStore"
import decideChatUserName from "../../utils/decideChatUserName"

const DMListItem = ({
  receiver,
  sender,
  message,
  createdAt,
  isSeen,
  handleClick,
  selectedChattingId,
}: DMUserListProps) => {
  const { user } = useAuthUserStore()

  return (
    <S.DMListItemLayout
      onClick={() => {
        handleClick({ user, receiver, sender })
      }}
      $isSelect={
        selectedChattingId === decideChatUserName(user, receiver, sender)._id
      }
    >
      <DMListProfile isSeen={isSeen} />

      <S.DMListChat>
        <S.DMListChatUserName>
          {decideChatUserName(user, receiver, sender).fullName}
        </S.DMListChatUserName>
        <S.DMListChatContent>{message}</S.DMListChatContent>
        <S.DMListChatDate>{createdAt.slice(0, 10)}</S.DMListChatDate>
      </S.DMListChat>
    </S.DMListItemLayout>
  )
}

export default DMListItem
