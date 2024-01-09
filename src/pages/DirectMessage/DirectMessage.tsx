import * as S from "./DirectMessage.Styles"
import DMChattingList from "./components/DMChattingList/DMChattingList"
import DMList from "./components/DMList/DMList"

const DirectMessage = () => {
  return (
    <S.DirectMessageLayout>
      <DMList />
      <DMChattingList />
    </S.DirectMessageLayout>
  )
}

export default DirectMessage
