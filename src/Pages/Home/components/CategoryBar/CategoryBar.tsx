import { useEffect } from "react"
import useCategoryListStore from "../../../../Stores/useCategoryListStore"
import * as S from "./CategoryBar.Styles"

const CategoryBar = () => {
  const { categoryList, fetchCategoryList } = useCategoryListStore()

  useEffect(() => {
    fetchCategoryList()
  }, [fetchCategoryList])

  console.log(categoryList)
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
