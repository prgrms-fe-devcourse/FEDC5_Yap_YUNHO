import { User } from "@/types"
export interface DMUserListProps {
  createdAt: string
  message: string
  isSeen: boolean
  receiver: User
  sender: User
}
