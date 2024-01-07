import useCategoryList from "@/hooks/useCategoryList"
import * as S from "./PostEditCategory.Styles"

const PostEditCategory = () => {
  const categoryList = useCategoryList()
  return (
    <S.PostEditCategoryLayout>
      <S.PostEditCategoryTitle>카테고리</S.PostEditCategoryTitle>
      <S.PostEditCategoryList>
        {categoryList &&
          categoryList.map((category) => {
            if (category.id === "all") {
              return
            }

            return (
              <S.PostEditCategoryItem>{category.name}</S.PostEditCategoryItem>
            )
          })}
      </S.PostEditCategoryList>
    </S.PostEditCategoryLayout>
  )
}

export default PostEditCategory
