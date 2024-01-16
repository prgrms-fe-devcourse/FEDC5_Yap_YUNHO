import { API } from "@/apis/Api"
import { JSONPost, Post } from "@/types"
import { useQuery } from "@tanstack/react-query"

const POST_DETAIL_QUERY_KEY = "POST_DETAIL_QUERY_KEY_18264196289164"

const useGetPost = ({ postId }: { postId: string | undefined }) => {
  const { data } = useQuery({
    queryKey: [POST_DETAIL_QUERY_KEY, postId],
    queryFn: async () => {
      return await API.get(`/posts/${postId}`).then((res) => res.data)
    },
    gcTime: 1000 * 60 * 5,
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

  return data
}

export default useGetPost
