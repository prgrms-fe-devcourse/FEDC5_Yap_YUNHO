import { useEffect } from "react"
import useCategoryListStore from "../../../../Stores/useCategoryListStore"
import * as S from "./CategoryBar.Styles"
import { CategoryBarProps } from "./CategoryBar.Types"

const CategoryBar = ({
  selectedCategory,
  onSelected,
}: CategoryBarProps): JSX.Element => {
  const { categoryList, fetchCategoryList } = useCategoryListStore()

  useEffect(() => {
    fetchCategoryList()
  }, [fetchCategoryList])

  console.log(categoryList)
  return (
    <S.CategoryBarLayout>
      <S.CategoryBarList>
        {categoryList &&
          categoryList.map((item) => (
            <S.CategoryBarListItem
              key={item.id}
              isSelect={selectedCategory.id === item.id}
            >
              <p>{item.name}</p>
            </S.CategoryBarListItem>
          ))}
      </S.CategoryBarList>
    </S.CategoryBarLayout>
  )
}

export default CategoryBar
