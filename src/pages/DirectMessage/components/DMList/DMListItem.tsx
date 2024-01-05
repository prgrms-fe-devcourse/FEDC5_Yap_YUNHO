import * as S from "./DMList.Styles"
import avatar from "@/assets/avatar.png"
const DMListItem = () => {
  return (
    <S.DMListItemLayout>
      <S.DMListProfile
        src={avatar}
        alt="DMList Profile Image"
      />
      <S.DMListChat>
        <S.DMListChatUserName>최훈오</S.DMListChatUserName>
        <S.DMListChatContent>하하하</S.DMListChatContent>
        <S.DMListChatDate>12월 2일</S.DMListChatDate>
      </S.DMListChat>
    </S.DMListItemLayout>
  )
}

export default DMListItem
