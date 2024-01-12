import { User, Message } from "@/types"

export interface handleClickProps {
  myId: string
  sender: User
  receiver: User
}
export interface MessageUserListProps {
  createdAt: string
  message: string
  isOnline: boolean
  receiver: User
  sender: User
  selectedMessageId: string
  handleClick: ({ myId, sender, receiver }: handleClickProps) => void
  profileImg: string
}

export interface MessageProps {
  children: Message
  othersId?: string
  scrollToBottom?: () => void
}
