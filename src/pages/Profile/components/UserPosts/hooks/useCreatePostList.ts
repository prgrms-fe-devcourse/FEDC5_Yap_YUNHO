import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { JSONPost } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { UserPostListItemProps } from "../components/UserPostList/components/UserPostListItem"

const USER_POST_LIST_QUERY_KEY = "USER_POST_LIST_QUERY_KEY"

const useCreatePostList = () => {
  const { userId } = useParams()
  const { user: authUser } = useAuthUserStore()

  const { data: createPostInfoList, isLoading } = useQuery({
    queryKey: [USER_POST_LIST_QUERY_KEY, userId],
    queryFn: () => API.get(`/posts/author/${userId}`).then((res) => res.data),
    select: (createPostInfoList: JSONPost[]) => {
      return createPostInfoList.map((postInfo) => {
        const { thumbnail } = JSON.parse(postInfo.title)
        const isLikedByMe = authUser.likes.some(
          ({ post }) => post === postInfo._id,
        )

        const convertedPost: UserPostListItemProps = {
          thumbnail,
          id: postInfo._id,
          likeCount: postInfo.likes.length,
          commentCount: postInfo.comments.length,
          isLikedByMe,
        }

        return convertedPost
      })
    },
  })

  return {
    isLoading,
    createPostInfoList,
  }
}

export default useCreatePostList
