import { useQuery } from "@tanstack/react-query"
import getNotificationAPI from "./../apis/getNotificationAPI"
import { Notification } from "@/types/index"
import useAuthUserStore from "@/stores/useAuthUserStore"

export const QUERY_KEY_GET_NOTIFICATION = "GET_NOTIFICATION"

const useGetNotification = () => {
  const { isLoggedIn } = useAuthUserStore()
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_NOTIFICATION],
    queryFn: getNotificationAPI,
    enabled: isLoggedIn,
    refetchInterval: 1000 * 5,
    gcTime: 1000 * 60 * 5,
    select: (data) => {
      return data.filter(
        (notification: Notification) =>
          !notification.seen &&
          notification.author._id !== notification.user._id,
      )
    },
  })

  return { data }
}

export default useGetNotification
