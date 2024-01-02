export interface Category {
  name: string
  id: string
}

export type OnSelectCategory = (newCategory: Category) => void

export interface CategoryBarProps {
  selectedCategory: Category
  onSelected: OnSelectCategory
}
