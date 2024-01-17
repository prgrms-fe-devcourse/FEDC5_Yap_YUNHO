import { Conversation } from "@/types"
import * as S from "./MessageGroupList.Styles"
import PriorityHighIcon from "@mui/icons-material/PriorityHigh"

interface MessageGroupItemInfo {
  messageGroupItem: Conversation
}

const MessageGroupItemRightInfo = ({
  messageGroupItem,
}: MessageGroupItemInfo) => {
  return (
    <S.MessageGroupItemNotSeenCount>
      {!messageGroupItem.seen && <PriorityHighIcon />}
    </S.MessageGroupItemNotSeenCount>
  )
}

export default MessageGroupItemRightInfo
