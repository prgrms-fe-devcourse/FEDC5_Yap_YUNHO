import * as S from "./PostContainer.Styles"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { Category } from "../CategoryBar/CategoryBar.Types"
import { useQuery } from "@tanstack/react-query"
import { API } from "@/apis/Api"
import { JSONPost, Post } from "@/types"
import PostCardList from "./components/PostCardList"
import { useEffect, useState } from "react"
import getSlicedPostList from "./util/getSlicedPostList"

const GET_POST_LIST_QUERY_KEY = "IT_IS_POST_LIST_QUERY_KEY_904367589125619"
interface PostContainerProps {
  selectedCategory: Category
}

const PostContainer = ({ selectedCategory }: PostContainerProps) => {
  const [listRange, setListRange] = useState(0)

  useEffect(() => {
    setListRange(0)
  }, [selectedCategory])

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

  const handleDecreaseRange = (count: number) => {
    if (listRange - count <= 0) {
      return setListRange(0)
    }

    setListRange((range) => range - count)
  }

  const handleIncreaseRange = (count: number) => {
    if (!data) {
      return
    }

    if (listRange + count >= data.length - 1) {
      return setListRange(data.length - 1)
    }
    setListRange((range) => range + count)
  }

  console.log(listRange)

  return (
    <S.PostContainerLayout>
      <S.ArrowIcon
        $isLeft={true}
        onClick={() => handleDecreaseRange(1)}
      >
        <ArrowBackIos className="arrow_icon" />
      </S.ArrowIcon>
      <PostCardList
        postList={getSlicedPostList(data, listRange)}
        onClickLeftCard={handleDecreaseRange}
        onClickRightCard={handleIncreaseRange}
      />
      <S.ArrowIcon
        $isLeft={false}
        onClick={() => handleIncreaseRange(1)}
      >
        <ArrowForwardIos className="arrow_icon" />
      </S.ArrowIcon>
    </S.PostContainerLayout>
  )
}

export default PostContainer
