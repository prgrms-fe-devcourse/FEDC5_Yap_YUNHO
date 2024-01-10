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
  selectedChattingId: string
  handleClick: ({ user, sender, receiver }: handleClickProps) => void
}

export interface MessageProps {
  children: Message
  id?: string
}
