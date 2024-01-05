import React from "react"
import * as S from "./CategoryBar.Styles"
import { CategoryBarProps } from "./CategoryBar.Types"
import useCategoryList from "@/hooks/useCategoryList"

const CategoryBar = ({
  selectedCategory,
  onSelected,
}: CategoryBarProps): React.ReactNode => {
  const categoryList = useCategoryList()

  return (
    <S.CategoryBarLayout>
      <S.CategoryBarList>
        {categoryList &&
          categoryList.map((category) => (
            <S.CategoryBarListItem
              key={category.id}
              $isSelect={selectedCategory.id === category.id}
              onClick={() => onSelected(category)}
            >
              <p>{category.name}</p>
            </S.CategoryBarListItem>
          ))}
      </S.CategoryBarList>
    </S.CategoryBarLayout>
  )
}

export default CategoryBar
