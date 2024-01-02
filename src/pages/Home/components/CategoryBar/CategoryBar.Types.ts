export interface Category {
  name: string
  id: string
  description: string
}

export type OnSelectCategory = (newCategory: Category) => void

export interface CategoryBarProps {
  selectedCategory: Category
  onSelected: OnSelectCategory
}
