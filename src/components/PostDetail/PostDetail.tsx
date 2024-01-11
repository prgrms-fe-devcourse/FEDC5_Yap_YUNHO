import * as GS from "@/components/Modal/ModalGlobal.Styles"
import * as S from "./PostDetail.Styles"
import Modal from "../Modal/Modal"
import PostDetailViewer from "./components/PostDetailViewer/PostDetailViewer"
import PostDetailInfo from "./components/PostDetailInfo/PostDetailInfo"
import { useParams } from "react-router-dom"
import useGetPost from "./hooks/useGetPost"

interface PostDetailProps {
  isShow: boolean
  onClose: () => void
}

const PostDetail = ({ onClose, isShow }: PostDetailProps) => {
  const { id } = useParams()
  const post = useGetPost({ postId: id })

  if (!id) {
    onClose()
    return
  }

  return (
    <Modal
      isShow={isShow}
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
