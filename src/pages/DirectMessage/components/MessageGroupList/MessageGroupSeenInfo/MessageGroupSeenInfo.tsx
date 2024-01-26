import { Conversation } from "@/types"
import * as S from "./MessageGroupSeenInfo.Styles"

interface MessageGroupSeenInfoProps {
  MessageGroupList: Conversation[]
}

const MessageGroupSeenInfo = ({
  MessageGroupList,
}: MessageGroupSeenInfoProps) => {
  const MessageGroupListCount = {
    total: MessageGroupList?.length,
    NotSeen: MessageGroupList?.filter((list: Conversation) => {
      return !list.seen
    }).length,
  }
  return (
    <S.MessageGroupSeenInfoLayout>
      <S.MessageGroupListSeenTitle>DM 목록</S.MessageGroupListSeenTitle>
      <S.MessageGroupListTotalSeenNumber>
        {MessageGroupListCount.total}
      </S.MessageGroupListTotalSeenNumber>
      <S.MessageGroupListNotSeenTitle>안 읽음</S.MessageGroupListNotSeenTitle>
      <S.MessageGroupListNotSeenNumber>
        {MessageGroupListCount.NotSeen}
      </S.MessageGroupListNotSeenNumber>
    </S.MessageGroupSeenInfoLayout>
  )
}

export default MessageGroupSeenInfo
