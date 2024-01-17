import { useNavigate } from "react-router-dom"
import useModal from "@/components/Modal/hooks/useModal"
import NotificationModal from "@/components/NotificationModal/NotificationModal"
import useGetNotification from "@/components/NotificationModal/hooks/useGetNotification"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"
import PostEdit from "@/components/PostEdit/PostEdit"
import useLogout from "@/hooks/useLogout"

const useMenuClick = () => {
  const navigate = useNavigate()
  const { NotificationListData } = useGetNotification()
  const {
    isShowModal: isShowNotification,
    showModal: showNotification,
    closeModal: closeNotification,
  } = useModal()

  const { isShowEditModal, showEditModal } = usePostEditModalStore()
  const { logoutMutate } = useLogout()

  const handleMenuClick = (menu: string) => {
    switch (menu) {
      case "로그인":
        navigate("/login")
        break
      case "로그아웃":
        logoutMutate.mutate()
        break
      case "DM":
        navigate("/directmessage")
        break
      case "게시물 생성":
        showEditModal()
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
  const PostEditModal = isShowEditModal && <PostEdit postId="newPost" />

  return {
    handleMenuClick,
    notificationModal,
    NotificationListData,
    PostEditModal,
  }
}

export default useMenuClick
