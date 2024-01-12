import { User } from "@/types"

export interface handleClickProps {
  my: User
  sender: User
  receiver: User
}
export interface DMUserListProps {
  createdAt: string
  message: string
  isOnline: boolean
  receiver: User
  sender: User
  selectedChattingId: string
  handleClick: ({ my, sender, receiver }: handleClickProps) => void
}
