import * as GS from "@/components/Modal/ModalGlobal.Styles"
import Modal from "../Modal/Modal"
import PostDetailViewer from "./components/PostDetailViewer/PostDetailViewer"
import PostDetailInfo from "./components/PostDetailInfo/PostDetailInfo"

interface PostDetailProps {
  isShow: boolean
  onClose: () => void
}

const PostDetail = ({ onClose, isShow }: PostDetailProps) => {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={true}
    >
      <GS.PostModalGlobalLayout>
        <GS.PostModalGlobalContainer>
          <PostDetailViewer />
        </GS.PostModalGlobalContainer>
        <GS.PostModalGlobalBoundary />
        <GS.PostModalGlobalContainer>
          <PostDetailInfo />
        </GS.PostModalGlobalContainer>
      </GS.PostModalGlobalLayout>
    </Modal>
  )
}

export default PostDetail
