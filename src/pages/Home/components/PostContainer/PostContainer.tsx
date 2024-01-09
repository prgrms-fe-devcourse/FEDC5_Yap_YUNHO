import * as S from "./PostContainer.Styles"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { Category } from "../CategoryBar/CategoryBar.Types"
import { useQuery } from "@tanstack/react-query"
import { API } from "@/apis/Api"
import { JSONPost, Post } from "@/types"
import PostCardList from "./components/PostCardList"
import { useState } from "react"

const GET_POST_LIST_QUERY_KEY = "FETCH_POST_LIST_HOME"
interface PostContainerProps {
  selectedCategory: Category
}

const PostContainer = ({ selectedCategory }: PostContainerProps) => {
  const [listRange, setListRange] = useState(0)
  const { data } = useQuery({
    queryKey: [GET_POST_LIST_QUERY_KEY, selectedCategory.id],
    queryFn: async () => {
      const { data } = await API.get(`/posts/channel/${selectedCategory.id}`)
      return data
    },
    gcTime: 1000 * 60 * 3,
    staleTime: 1000 * 60,
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

  const handleDecreaseRange = () => {
    if (listRange <= 0) {
      return
    }

    setListRange((range) => range - 1)
  }

  const handleIncreaseRange = () => {
    if (!data) {
      return
    }

    if (listRange >= data.length - 1) {
      return
    }
    setListRange((range) => range + 1)
  }

  const getPageData = () => {
    if (!data) {
      return []
    }

    if (listRange === 0) {
      return [null, null, ...data.slice(0, 3)]
    }

    if (listRange === 1) {
      return [null, ...data.slice(0, 4)]
    }

    if (listRange >= data.length - 2) {
      const makeNull = new Array(5 - (data.length - listRange)).fill(null)
      return [...data.slice(listRange - 2), ...makeNull]
    }

    return data.slice(listRange - 2, listRange + 3)
  }

  return (
    <S.PostContainerLayout>
      <S.ArrowIcon
        $isLeft={true}
        onClick={handleDecreaseRange}
      >
        <ArrowBackIos className="arrow_icon" />
      </S.ArrowIcon>
      <PostCardList postList={getPageData()} />
      <S.ArrowIcon
        $isLeft={false}
        onClick={handleIncreaseRange}
      >
        <ArrowForwardIos className="arrow_icon" />
      </S.ArrowIcon>
    </S.PostContainerLayout>
  )
}

export default PostContainer
