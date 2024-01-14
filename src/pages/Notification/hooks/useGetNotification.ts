import { useQuery } from "@tanstack/react-query"
import getNotificationAPI from "./../apis/getNotificationAPI"

const QUERY_KEY_GET_NOTIFICATION = "GET_NOTIFICATION"

const useGetNotification = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_NOTIFICATION],
    queryFn: getNotificationAPI,
    initialData: [],
    refetchInterval: 5000,

    select: () => {},
  })

  return { data }
}

export default useGetNotification
