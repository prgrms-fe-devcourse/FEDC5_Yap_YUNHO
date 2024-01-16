import { useQuery } from "@tanstack/react-query"
import { AUTH_API } from "@/apis/Api"
import { Notification } from "@/types/index"
import useAuthUserStore from "@/stores/useAuthUserStore"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"

export const QUERY_KEY_GET_NOTIFICATION = "GET_NOTIFICATION"

const useGetNotification = () => {
  const { isLoggedIn } = useAuthUserStore()
  const { isShowPostDetail } = usePostDetailModalStore()
  const { isShowEditModal } = usePostEditModalStore()

  const isNotShowModal = !isShowPostDetail && !isShowEditModal

  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_NOTIFICATION],
    queryFn: fetchNewNotification,
    enabled: isLoggedIn,
    refetchInterval: isNotShowModal && 1000 * 10,
    gcTime: 1000 * 60 * 5,
    select: (data) => {
      return data.filter(
        (notification: Notification) =>
          !notification.seen &&
          notification.author._id !== notification.user._id,
      )
    },
  })

  return { NotificationListData: data }
}

export default useGetNotification

const fetchNewNotification = async () => {
  return await AUTH_API.get("/notifications")
    .then((res) => res.data)
    .catch(() => {
      return []
    })
}
