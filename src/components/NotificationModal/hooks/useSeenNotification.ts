import { useMutation, useQueryClient } from "@tanstack/react-query"
import seenNotificationAPI from "../apis/seenNotificationAPI"
import { QUERY_KEY_GET_NOTIFICATION } from "./useGetNotification"
const QUERY_KEY_SEEN_NOTIFICATION = "SEEN_NOTIFICATION"
const useSeenNotification = () => {
  const queryClient = useQueryClient()
  const seenNotification = useMutation({
    mutationKey: [QUERY_KEY_SEEN_NOTIFICATION],
    mutationFn: seenNotificationAPI,
    onSuccess: () => {
      // 알림 다시 받아오는 처리
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_NOTIFICATION],
      })
    },
    onError: () => {
      console.error()
    },
  })

  return { seenNotification }
}

export default useSeenNotification
