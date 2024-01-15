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
      return data.filter((notificaiton: Notification) => !notificaiton.seen)
    },
  })

  return { data }
}

export default useGetNotification
