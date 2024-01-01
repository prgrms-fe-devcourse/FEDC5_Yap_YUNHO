import React, { useEffect } from "react"
import useCategoryListStore from "../../../../stores/useCategoryListStore"
import * as S from "./CategoryBar.Styles"
import { CategoryBarProps } from "./CategoryBar.Types"

const CategoryBar = ({
  selectedCategory,
  onSelected,
}: CategoryBarProps): React.ReactNode => {
  const { categoryList, fetchCategoryList } = useCategoryListStore()

  useEffect(() => {
    fetchCategoryList()
  }, [fetchCategoryList])

  console.log(categoryList)
  return (
    <S.CategoryBarLayout>
      <S.CategoryBarList>
        {categoryList &&
          categoryList.map((category) => (
            <S.CategoryBarListItem
              key={category.id}
              $isSelect={selectedCategory.id === category.id}
            >
              <p>{category.name}</p>
            </S.CategoryBarListItem>
          ))}
      </S.CategoryBarList>
    </S.CategoryBarLayout>
  )
}

export default CategoryBar
