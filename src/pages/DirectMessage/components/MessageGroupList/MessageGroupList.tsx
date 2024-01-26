import * as S from "./MessageGroupList.Styles"
import useMessageGroupList from "../../hooks/useMessageGroupList"
import MessageGroupSeenInfo from "./MessageGroupSeenInfo/MessageGroupSeenInfo"
import MessageGroupUserList from "./MessageGroupUserList/MessageGroupUserList"

const MessageGroupList = () => {
  const { data: MessageGroupList } = useMessageGroupList()

  if (!MessageGroupList) {
    return
  }

  return (
    <S.MessageGroupListLayout>
      <MessageGroupSeenInfo MessageGroupList={MessageGroupList} />
      <MessageGroupUserList MessageGroupList={MessageGroupList} />
    </S.MessageGroupListLayout>
  )
}
export default MessageGroupList
