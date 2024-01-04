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
import Modal from "@/components/Modal/Modal"
import useModal from "@/components/Modal/hooks/useModal"

const Home = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  // 테스트 모달
  const { isModalToggle, showModal, closeModal } = useModal()

  return (
    <S.HomeLayout>
      <Navbar />
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelected={onSelectedCategory}
      />
      <PostContainer />
      <Modal
        isShow={isModalToggle}
        closeModal={closeModal}
      >
        <div>모달 테스트 중입니다</div>
      </Modal>
      <button onClick={showModal}>오픈 모달</button>
    </S.HomeLayout>
  )
}

export default Home
