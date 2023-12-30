import { useEffect, useState } from "react"
import * as S from "./CategoryBar.Styles"
import { Category } from "./CategoryBar.Types"
const DUMMY_CATEGORY_LIST: Category[] = [
  { name: "전체", id: "ALL" },
  { name: "휴식", id: "11" },
  { name: "출근길", id: "22" },
  { name: "퇴근길", id: "33" },
  { name: "잠들때", id: "44" },
  { name: "에너지 충전", id: "55" },
  { name: "로맨스", id: "66" },
]

const CategoryBar = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([
    { name: "전체", id: "all" },
  ])

  return <S.CategoryBarLayout></S.CategoryBarLayout>
}

export default CategoryBar

// [
//   ({
//     authRequired: false,
//     posts: [],
//     _id: "658afcdeef2fa724b416d228",
//     name: "첫번째",
//     description: "첫번째",
//     createdAt: "2023-12-26T16:18:38.952Z",
//     updatedAt: "2023-12-26T16:18:38.952Z",
//     __v: 0,
//   },
//   {
//     authRequired: false,
//     posts: [],
//     _id: "658afddc9bebfb24f0b5ba8f",
//     name: "두번째",
//     description: "658aa44efc3ac71f7467ab27",
//     createdAt: "2023-12-26T16:22:52.207Z",
//     updatedAt: "2023-12-26T16:22:52.207Z",
//     __v: 0,
//   })
// ]
