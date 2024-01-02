import { useState } from "react"
import * as S from "./Home.Styles"
import Navbar from "../../components/Navbar/Navbar"
import CategoryBar from "./components/CategoryBar/CategoryBar"
import {
  Category,
  OnSelectCategory,
} from "./components/CategoryBar/CategoryBar.Types"
import { INITIAL_CATEGORY } from "@/hooks/useCategoryList"

const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  return (
    <S.HomeLayout>
      <Navbar />
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelected={onSelectedCategory}
      />
    </S.HomeLayout>
  )
}

export default Home
