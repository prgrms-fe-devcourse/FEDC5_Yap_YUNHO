import * as GS from "@/components/Modal/ModalGlobal.Styles"
import * as S from "./PostDetail.Styles"
import Modal from "../Modal/Modal"
import PostDetailViewer from "./components/PostDetailViewer/PostDetailViewer"
import PostDetailInfo from "./components/PostDetailInfo/PostDetailInfo"
import { useParams } from "react-router-dom"
import useGetPost from "./hooks/useGetPost"
import usePostDetailModalStore from "./store/usePostDetailModalStore"

interface PostDetailProps {
  onClose: () => void
}

const PostDetail = ({ onClose }: PostDetailProps) => {
  const { isShowPostDetail } = usePostDetailModalStore()
  const { id } = useParams()
  const post = useGetPost({ postId: id })

  if (!id) {
    onClose()
    return
  }

  return (
    <Modal
      isShow={isShowPostDetail}
      onClose={onClose}
      clickAwayEnable={true}
    >
      {post && (
        <GS.PostModalGlobalLayout>
          <GS.PostModalGlobalContainer>
            <PostDetailViewer post={post} />
          </GS.PostModalGlobalContainer>

          <S.PostDetailBoundary />

          <GS.PostModalGlobalContainer>
            <PostDetailInfo
              onClose={onClose}
              post={post}
            />
          </GS.PostModalGlobalContainer>
        </GS.PostModalGlobalLayout>
      )}
    </Modal>
  )
}

export default PostDetail
