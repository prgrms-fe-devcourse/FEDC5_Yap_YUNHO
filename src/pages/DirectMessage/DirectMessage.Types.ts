import { User, Message, Conversation } from "@/types"

export interface handleMessageGroupClickProps {
  myId: string
  sender: User
  receiver: User
}
export interface MessageGroupItemProps {
  messageGroupItem: Conversation
  others: User
  selectedMessageGroupId: string
  handleMessageGroupClick: ({
    myId,
    sender,
    receiver,
  }: handleMessageGroupClickProps) => void
}

export interface MessageProps {
  messageData: Message
  othersUserId?: string
  scrollToBottom?: () => void
}
