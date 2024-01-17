import { useState } from "react"
import * as S from "./Home.Styles"
import CategoryBar from "./components/CategoryBar/CategoryBar"
import {
  Category,
  OnSelectCategory,
} from "./components/CategoryBar/CategoryBar.Types"
import PostContainer from "./components/PostContainer/PostContainer"
import getRandomCategory from "./util/getRandomCategory"

const Home = () => {
  getRandomCategory()
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(getRandomCategory())

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  return (
    <>
      <S.HomeLayout>
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelected={onSelectedCategory}
        />
        <PostContainer selectedCategory={selectedCategory} />
      </S.HomeLayout>
    </>
  )
}

export default Home
