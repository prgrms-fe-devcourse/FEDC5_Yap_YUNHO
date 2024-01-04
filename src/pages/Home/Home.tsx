import { useState } from "react"
import * as S from "./Home.Styles"
import Navbar from "@/components/Navbar/Navbar"
import CategoryBar from "./components/CategoryBar/CategoryBar"
import {
  Category,
  OnSelectCategory,
} from "./components/CategoryBar/CategoryBar.Types"
import { INITIAL_CATEGORY } from "@/hooks/useCategoryList"
import PostContainer from "./components/PostContainer/PostContainer"
import { Modal } from "@mui/material"

const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  return (
    <S.HomeLayout>
      <Modal>
        <div>dsfsdf</div>
      </Modal>
      <Navbar />
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelected={onSelectedCategory}
      />
      <PostContainer />
    </S.HomeLayout>
  )
}

export default Home
