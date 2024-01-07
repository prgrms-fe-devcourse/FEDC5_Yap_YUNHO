import useCategoryList from "@/hooks/useCategoryList"
import * as S from "./PostEditCategory.Styles"
import { useState } from "react"
import { Category } from "@/Pages/Home/components/CategoryBar/CategoryBar.Types"

const PostEditCategory = () => {
  const categoryList = useCategoryList()
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    name: "",
    id: "",
    description: "",
  })

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
              <S.PostEditCategoryItem
                $isSelect={category.id === selectedCategory?.id}
                onClick={() => {
                  setSelectedCategory(category)
                }}
              >
                {category.name}
              </S.PostEditCategoryItem>
            )
          })}
      </S.PostEditCategoryList>
    </S.PostEditCategoryLayout>
  )
}

export default PostEditCategory
