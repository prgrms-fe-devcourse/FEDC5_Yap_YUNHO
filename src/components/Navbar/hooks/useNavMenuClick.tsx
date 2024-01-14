import { useNavigate } from "react-router-dom"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useModal from "@/components/Modal/hooks/useModal"
import NotificationModal from "@/components/NotificationModal/NotificationModal"

const useMenuClick = () => {
  const navigate = useNavigate()
  const { setLogout } = useAuthUserStore()
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
        // 게시물 생성 모달
        break
      case "알림":
        showNotification()
        // 알림 창(후순위)
        break
      default:
        break
    }
  }

  const notificationModal = (
    <NotificationModal
      isShow={isShowNotification}
      onClose={closeNotification}
    />
  )

  const handleLogout = async () => {
    await API.post("/logout")
      .then(() => {
        setLogout()
        navigate("/")
      })
      .catch((err) => {
        console.error("로그아웃 오류", err)
      })
  }

  return { handleMenuClick, notificationModal }
}

export default useMenuClick
