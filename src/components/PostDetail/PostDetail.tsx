import * as GS from "@/components/Modal/ModalGlobal.Styles"
import * as S from "./PostDetail.Styles"
import Modal from "../Modal/Modal"
import PostDetailViewer from "./components/PostDetailViewer/PostDetailViewer"
import PostDetailInfo from "./components/PostDetailInfo/PostDetailInfo"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { API } from "@/apis/Api"
import { JSONPost, Post } from "@/types"

const POST_DETAIL_QUERY_KEY = "POST_DETAIL_QUERY_KEY"

interface PostDetailProps {
  isShow: boolean
  onClose: () => void
}

const PostDetail = ({ onClose, isShow }: PostDetailProps) => {
  const { id } = useParams()

  const { data: post } = useQuery({
    queryKey: [POST_DETAIL_QUERY_KEY, id],
    queryFn: async () => {
      return await API.get(`/posts/${id}`).then((res) => res.data)
    },
    select: (fetchPost: JSONPost) => {
      const { content, mediaUrl, thumbnail } = JSON.parse(fetchPost.title)

      const detailPost: Post = {
        ...fetchPost,
        title: {
          mediaUrl: mediaUrl,
          thumbnail: thumbnail,
          content: content,
        },
      }
      return detailPost
    },
  })

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
