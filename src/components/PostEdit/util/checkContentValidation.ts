const checkContentValidation = (content: string) => {
  if (!content.trim()) {
    return false
  }

  return true
}

export default checkContentValidation
