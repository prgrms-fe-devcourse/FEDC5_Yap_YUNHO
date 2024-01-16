import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AUTH_API } from "@/apis/Api"

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

const seenNotificationAPI = async () => {
  await AUTH_API.put("/notifications/seen")
    .then()
    .catch(() => {
      throw new Error("알림 목록 받아 오기 실패")
    })
}