import * as S from "./DMList.Styles"
import avatar from "@/assets/avatar.png"
import { DMUserListProps } from "./../../types"
const DMListItem = ({
  receiver,
  sender,
  message,
  createdAt,
  isSeen,
}: DMUserListProps) => {
  return (
    <S.DMListItemLayout>
      <S.DMListProfile
        src={avatar}
        alt="DMList Profile Image"
      />
      <S.DMListChat>
        <S.DMListChatUserName>{receiver.fullName}</S.DMListChatUserName>
        <S.DMListChatContent>{message}</S.DMListChatContent>
        <S.DMListChatDate>{createdAt.slice(0, 10)}</S.DMListChatDate>
      </S.DMListChat>
    </S.DMListItemLayout>
  )
}

export default DMListItem

// 메시지와 날짜, 읽음 처리는 그대로
// 프로필과 상대방이름은 내가 최근에 메시지를 보낸 경우 Receiver의 정보를
// 내가 최근에 메시지를 받은 경우 Sender의 정보를
