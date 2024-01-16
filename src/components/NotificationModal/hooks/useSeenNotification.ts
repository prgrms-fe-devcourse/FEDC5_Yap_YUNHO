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
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_NOTIFICATION],
      })
    },
  })

  return { seenNotification }
}

export default useSeenNotification
