import { User, Message } from "@/types"

export interface handleMessageGroupClickProps {
  myId: string
  sender: User
  receiver: User
}
export interface MessageGroupItemProps {
  createdAt: string
  message: string
  isOnline: boolean
  receiver: User
  sender: User
  selectedMessageGroupId: string
  handleMessageGroupClick: ({
    myId,
    sender,
    receiver,
  }: handleMessageGroupClickProps) => void
  profileImg: string
}

export interface MessageProps {
  children: Message
  othersUserId?: string
  scrollToBottom?: () => void
}
