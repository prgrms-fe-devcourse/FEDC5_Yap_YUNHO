import * as S from "./DirectMessage.Styles"
import DMChattingList from "./components/DMChattingList/DMChattingList"
import MessageGroupList from "./components/MessageGroupList/MessageGroupList"

const DirectMessage = () => {
  return (
    <S.DirectMessageLayout>
      <MessageGroupList />
      <DMChattingList />
    </S.DirectMessageLayout>
  )
}

export default DirectMessage
