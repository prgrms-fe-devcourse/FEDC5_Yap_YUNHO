import * as GS from "@/components/Modal/ModalGlobal.Styles"
import Modal from "../Modal/Modal"

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
        <GS.PostModalGlobalContainer></GS.PostModalGlobalContainer>
        <GS.PostModalGlobalBoundary />
        <GS.PostModalGlobalContainer></GS.PostModalGlobalContainer>
      </GS.PostModalGlobalLayout>
    </Modal>
  )
}

export default PostDetail
