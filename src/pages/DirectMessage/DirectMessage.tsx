import * as S from "./DirectMessage.Styles"
import MessageList from "./components/MessageList/MessageList"
import MessageGroupList from "./components/MessageGroupList/MessageGroupList"

const DirectMessage = () => {
  return (
    <S.DirectMessageLayout>
      <MessageGroupList />
      <MessageList />
    </S.DirectMessageLayout>
  )
}

export default DirectMessage
