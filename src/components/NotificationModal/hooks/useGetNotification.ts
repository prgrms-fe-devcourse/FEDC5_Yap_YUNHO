import { useQuery } from "@tanstack/react-query"
import getNotificationAPI from "./../apis/getNotificationAPI"
import { Notification } from "@/types/index"

export const QUERY_KEY_GET_NOTIFICATION = "GET_NOTIFICATION"

const useGetNotification = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_NOTIFICATION],
    queryFn: getNotificationAPI,
    initialData: [],
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
