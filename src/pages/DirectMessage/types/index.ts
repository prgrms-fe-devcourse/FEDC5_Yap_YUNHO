import { User } from "@/types"

export interface handleClickProps {
  user: User
  sender: User
  receiver: User
}
export interface DMUserListProps {
  createdAt: string
  message: string
  seen: boolean
  receiver: User
  sender: User
  selectedChattingId: string
  handleClick: ({ user, sender, receiver }: handleClickProps) => void
}
