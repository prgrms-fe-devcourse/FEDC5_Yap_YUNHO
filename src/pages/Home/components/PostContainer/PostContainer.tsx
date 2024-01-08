import * as S from "./PostContainer.Styles"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { Category } from "../CategoryBar/CategoryBar.Types"
import { useQuery } from "@tanstack/react-query"
import { API } from "@/apis/Api"
import { JSONPost, Post } from "@/types"
import PostCardList from "./components/PostCardList"

const GET_POST_LIST_QUERY_KEY = "FETCH_POST_LIST_HOME"
interface PostContainerProps {
  selectedCategory: Category
}

const PostContainer = ({ selectedCategory }: PostContainerProps) => {
  const { data } = useQuery({
    queryKey: [GET_POST_LIST_QUERY_KEY, selectedCategory.id],
    queryFn: async () => {
      const { data } = await API.get(`/posts/channel/${selectedCategory.id}`)
      return data
    },
    select: (PostList: JSONPost[]) => {
      const convertedList: Post[] = PostList.map((post: JSONPost) => {
        return {
          ...post,
          title: JSON.parse(post.title),
        }
      })

      return convertedList
    },
  })

  console.log(data?.slice(0, 5))
  return (
    <S.PostContainerLayout>
      <S.ArrowIcon $isLeft={true}>
        <ArrowBackIos className="arrow_icon" />
      </S.ArrowIcon>
      <PostCardList />
      <S.ArrowIcon $isLeft={false}>
        <ArrowForwardIos className="arrow_icon" />
      </S.ArrowIcon>
    </S.PostContainerLayout>
  )
}

export default PostContainer
