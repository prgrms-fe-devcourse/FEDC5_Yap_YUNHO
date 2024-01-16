import * as S from "./DirectMessage.Styles"
import MessageList from "./components/MessageList/MessageList"
import MessageGroupList from "./components/MessageGroupList/MessageGroupList"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PostDetail from "@/components/PostDetail/PostDetail"

const DirectMessage = () => {
  const { isShowPostDetail, showDetailModal, closeDetailModal } =
    usePostDetailModalStore()
  const { modalName, userId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    if (!modalName) {
      return
    }

    if (modalName === "postdetail") {
      showDetailModal()
    }
  }, [modalName, showDetailModal])

  const handleNavigatePostDetail = () => {
    closeDetailModal()
    if (!userId) {
      navigate(`/directmessage`)
      return
    }
    navigate(`/directmessage/${userId}`)
  }

  return (
    <>
      {isShowPostDetail && <PostDetail onClose={handleNavigatePostDetail} />}
      <S.DirectMessageLayout>
        <MessageGroupList />
        <MessageList />
      </S.DirectMessageLayout>
    </>
  )
}

export default DirectMessage
