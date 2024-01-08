import { useEffect, useState } from "react"
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
import { useNavigate, useParams } from "react-router-dom"

const Home = () => {
  const { isShowModal, showModal, closeModal } = useModal()
  const { id } = useParams()
  const navigation = useNavigate()
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  useEffect(() => {
    if (!id) {
      closeModal()
      return
    }

    showModal()
  }, [closeModal, id, showModal])

  const onSelectedCategory: OnSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  const handleClosePostEdit = () => {
    navigation("/")
  }

  return (
    <>
      <S.HomeLayout>
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelected={onSelectedCategory}
        />
        <button
          onClick={() => {
            navigation("/postedit/newPost")
          }}
        >
          Modal Open
        </button>
        <PostContainer />
      </S.HomeLayout>

      <Modal
        isShow={isShowModal}
        onClose={handleClosePostEdit}
        clickAwayEnable={false}
      >
        <PostEdit />
      </Modal>
    </>
  )
}

export default Home
