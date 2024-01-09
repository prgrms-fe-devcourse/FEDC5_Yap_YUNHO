import * as S from "./PostDetail.Styles"
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
      <S.PostDetailLayout></S.PostDetailLayout>
    </Modal>
  )
}

export default PostDetail
