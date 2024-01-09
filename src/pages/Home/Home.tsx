import { useState } from "react"
import * as S from "./Home.Styles"
import CategoryBar from "./components/CategoryBar/CategoryBar"
import {
  Category,
  OnSelectCategory,
} from "./components/CategoryBar/CategoryBar.Types"
import { INITIAL_CATEGORY } from "@/hooks/useCategoryList"
import PostContainer from "./components/PostContainer/PostContainer"
import Modal from "@/components/Modal/Modal"
import useModal from "@/components/Modal/hooks/useModal"
import PostEdit from "@/components/PostEdit/PostEdit"

const Home = () => {
  const { closeModal } = useModal()
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  return (
    <S.HomeLayout>
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelected={onSelectedCategory}
      />
      <PostContainer />
      <Modal
        isShow={false}
        onClose={closeModal}
      >
        <PostEdit />
      </Modal>
    </S.HomeLayout>
  )
}

export default Home
