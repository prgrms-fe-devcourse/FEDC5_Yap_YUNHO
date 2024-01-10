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
import PostDetail from "@/components/PostDetail/PostDetail"
import usePostDetailModalStore from "@/components/PostDetail/store/usePostDetailModalStore"

const Home = () => {
  // 완료 후 제거 예정
  // Post Edit store 상태
  const { isShowEditModal, showEditModal, closeEditModal } =
    usePostEditModalStore()

  // Post Detail store 상태
  const { isShowPostDetail, showDetailModal, closeDetailModal } =
    usePostDetailModalStore()

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

    if (modalName === "postdetail") {
      showDetailModal()
    }
  }, [closeEditModal, modalName, showDetailModal, showEditModal])

  const handleClosePostEdit = useCallback(() => {
    closeEditModal()
    navigate("/")
  }, [closeEditModal, navigate])

  const handleClosePostDetail = useCallback(() => {
    closeDetailModal()
    navigate("/")
  }, [closeDetailModal, navigate])

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
        <S.TestButton
          onClick={() => {
            navigate("/postedit/659c181c16a2b736436afca2")
          }}
        >
          Edit Modal
        </S.TestButton>

        <S.TestButton
          onClick={() => {
            navigate("/postdetail/659c181c16a2b736436afca2")
          }}
        >
          Detail Modal
        </S.TestButton>

        <PostContainer selectedCategory={selectedCategory} />
      </S.HomeLayout>

      {isShowEditModal && (
        <PostEdit
          onClose={handleClosePostEdit}
          isShowModal={isShowEditModal}
        />
      )}

      {isShowPostDetail && (
        <PostDetail
          onClose={handleClosePostDetail}
          isShow={isShowPostDetail}
        />
      )}
    </>
  )
}

export default Home
