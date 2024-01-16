import { useNavigate } from "react-router-dom"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useModal from "@/components/Modal/hooks/useModal"
import NotificationModal from "@/components/NotificationModal/NotificationModal"
import useGetNotification from "@/components/NotificationModal/hooks/useGetNotification"

const useMenuClick = () => {
  const navigate = useNavigate()
  const { setLogout } = useAuthUserStore()
  const { data: NotificationListData } = useGetNotification()
  const {
    isShowModal: isShowNotification,
    showModal: showNotification,
    closeModal: closeNotification,
  } = useModal()

  const handleMenuClick = (menu: string) => {
    switch (menu) {
      case "로그인":
        navigate("/login")
        break
      case "로그아웃":
        handleLogout()
        break
      case "DM":
        navigate("/directmessage")
        break
      case "게시물 생성":
        break
      case "알림":
        showNotification()
        break
      default:
        break
    }
  }

  const notificationModal = (
    <NotificationModal
      isShow={isShowNotification}
      onClose={closeNotification}
      NotificationListData={NotificationListData}
    />
  )

  const handleLogout = async () => {
    await API.post("/logout")
      .then(() => {
        setLogout()
        navigate("/")
      })
      .catch(() => {})
  }

  return { handleMenuClick, notificationModal, NotificationListData }
}

export default useMenuClick
