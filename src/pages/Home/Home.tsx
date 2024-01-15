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
  // 완료 후 제거 예정
  // Post Edit store 상태
  const { isShowEditModal, showEditModal, closeEditModal } =
    usePostEditModalStore()

  const { modalName } = useParams()
  const navigate = useNavigate()

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(INITIAL_CATEGORY)

  useEffect(() => {
    if (!modalName) {
      return
    }

    if (modalName === "postedit") {
      showEditModal()
    }
  }, [modalName, showEditModal])

  const handleClosePostEdit = useCallback(() => {
    closeEditModal()
    navigate("/")
  }, [closeEditModal, navigate])

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
        {/* <S.TestButton
          onClick={() => {
            navigate("/postedit/newPost")
          }}
        >
          Edit Modal
        </S.TestButton> */}

        <PostContainer selectedCategory={selectedCategory} />
      </S.HomeLayout>

      {isShowEditModal && <PostEdit onClose={handleClosePostEdit} />}
    </>
  )
}

export default Home
