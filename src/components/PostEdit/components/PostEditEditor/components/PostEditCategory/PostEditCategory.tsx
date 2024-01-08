import useCategoryList from "@/hooks/useCategoryList"
import * as S from "./PostEditCategory.Styles"
import * as GS from "@/components/CategoryList/CategoryList.Styles"
import { Category } from "@/Pages/Home/components/CategoryBar/CategoryBar.Types"
import {
  EditPostState,
  HandleEditPost,
} from "@/components/PostEdit/PostEdit.Types"

interface PostEditCategoryProps {
  onEdit: HandleEditPost
  postData: EditPostState
}

const PostEditCategory = ({ onEdit, postData }: PostEditCategoryProps) => {
  const categoryList = useCategoryList()

  const handleClickCategory = (category: Category) => {
    onEdit({
      type: "category",
      value: category.id,
    })
  }

  return (
    <S.PostEditCategoryLayout>
      <S.PostEditCategoryTitle>카테고리</S.PostEditCategoryTitle>
      <S.PostEditCategoryList>
        {categoryList &&
          categoryList.map((category) => (
            <GS.CategoryBarListItem
              key={category.id}
              $isSelect={category.id === postData.category}
              onClick={() => {
                handleClickCategory(category)
              }}
            >
              {category.name}
            </GS.CategoryBarListItem>
          ))}
      </S.PostEditCategoryList>
    </S.PostEditCategoryLayout>
  )
}

export default PostEditCategory
