import { User } from "@/types"
export interface DMUserListProps {
  createdAt: string
  message: string
  seen: boolean
  receiver: User
  sender: User
}
