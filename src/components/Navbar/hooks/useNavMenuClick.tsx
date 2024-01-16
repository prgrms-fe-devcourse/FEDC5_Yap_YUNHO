import { useNavigate } from "react-router-dom"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import PostEdit from "@/components/PostEdit/PostEdit"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"

const useMenuClick = () => {
  const navigate = useNavigate()
  const { setLogout } = useAuthUserStore()
  const { isShowEditModal, showEditModal } = usePostEditModalStore()
  const { isShowPostDetail } = usePostDetailModalStore()

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
        showEditModal()
        break
      case "알림":
        // 알림 창(후순위)
        break
      default:
        break
    }
  }

  const PostEditModal = isShowEditModal && !isShowPostDetail && (
    <PostEdit postId="newPost" />
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

  return { handleMenuClick, PostEditModal }
}

export default useMenuClick
