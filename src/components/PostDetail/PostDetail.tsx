import * as GS from "@/components/Modal/ModalGlobal.Styles"
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

  const { data } = useQuery({
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

  console.log(data)

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
