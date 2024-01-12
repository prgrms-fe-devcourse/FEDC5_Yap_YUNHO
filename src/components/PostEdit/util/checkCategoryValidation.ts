const checkCategoryValidation = (categoryId: string) => {
  if (!categoryId.trim()) {
    return false
  }

  return true
}

export default checkCategoryValidation
