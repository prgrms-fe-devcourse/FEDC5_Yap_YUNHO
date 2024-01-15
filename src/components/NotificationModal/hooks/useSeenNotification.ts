import { useMutation } from "@tanstack/react-query"
import seenNotificationAPI from "../apis/seenNotificationAPI"
const QUERY_KEY_SEEN_NOTIFICATION = "SEEN_NOTIFICATION"
const useSeenNotification = () => {
  const seenNotification = useMutation({
    mutationKey: [QUERY_KEY_SEEN_NOTIFICATION],
    mutationFn: seenNotificationAPI,
    onSuccess: () => {
      // 알림 다시 받아오는 처리
    },
    onError: () => {
      console.error()
    },
  })

  return { seenNotification }
}

export default useSeenNotification
