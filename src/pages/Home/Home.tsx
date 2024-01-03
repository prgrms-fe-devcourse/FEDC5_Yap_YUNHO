import { useState } from "react"
import * as S from "./Home.Styles"
import Navbar from "@/components/Navbar/Navbar"
import CategoryBar from "./components/CategoryBar/CategoryBar"
import {
  Category,
  OnSelectCategory,
} from "./components/CategoryBar/CategoryBar.Types"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    name: "전체",
    id: "all",
  })

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  return (
    <S.HomeLayout>
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelected={onSelectedCategory}
      />
    </S.HomeLayout>
  )
}

export default Home
