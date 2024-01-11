import { User, Message } from "@/types"

export interface handleClickProps {
  user: User
  sender: User
  receiver: User
}
export interface DMUserListProps {
  createdAt: string
  message: string
  isSeen: boolean
  receiver: User
  sender: User
  selectedMessageId: string
  handleClick: ({ user, sender, receiver }: handleClickProps) => void
  profileImg: string
}

export interface MessageProps {
  children: Message
  othersId?: string
  scrollToBottom?: () => void
}
