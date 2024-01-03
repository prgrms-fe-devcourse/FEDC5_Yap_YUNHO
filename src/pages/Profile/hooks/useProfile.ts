import useAuthUserStore from "@/stores/useAuthUserStore"
import { useMemo } from "react"

interface profileProps {
  userId?: string
}

const useProfile = ({ userId }: profileProps) => {
  const { user } = useAuthUserStore()
  const isMyPage = useMemo(() => userId === user._id, [userId, user._id])

  return { isMyPage }
}

export default useProfile
