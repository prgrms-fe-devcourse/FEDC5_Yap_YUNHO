const findIndexByLowerCase = (target: string, keyword: string) => {
  const keywordIndex = target.toLowerCase().indexOf(keyword.toLowerCase())

  if (keywordIndex === -1) {
    return -1
  }

  return keywordIndex
}

export default findIndexByLowerCase
