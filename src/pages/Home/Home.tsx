import { useCallback, useEffect, useState } from "react"
import * as S from "./Home.Styles"
import CategoryBar from "./components/CategoryBar/CategoryBar"
import {
  Category,
  OnSelectCategory,
} from "./components/CategoryBar/CategoryBar.Types"
import { INITIAL_CATEGORY } from "@/hooks/useCategoryList"
import PostContainer from "./components/PostContainer/PostContainer"
import PostEdit from "@/components/PostEdit/PostEdit"
import { useNavigate, useParams } from "react-router-dom"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"

const Home = () => {
  const { isShowEditModal, showEditModal, closeEditModal } =
    usePostEditModalStore()
  const { id } = useParams()
  const navigation = useNavigate()
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  useEffect(() => {
    if (!id) {
      return
    }

    showEditModal()

    return () => {
      closeEditModal()
    }
  }, [closeEditModal, id, showEditModal])

  const handleClosePostEdit = useCallback(() => {
    closeEditModal()
    navigation("/")
  }, [closeEditModal, navigation])

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
        <button
          onClick={() => {
            navigation("/postedit/659c181c16a2b736436afca2")
          }}
        >
          Modal Open
        </button>
        <PostContainer selectedCategory={selectedCategory} />
      </S.HomeLayout>

      <PostEdit
        onClose={handleClosePostEdit}
        isShowModal={isShowEditModal}
      />
    </>
  )
}

export default Home
