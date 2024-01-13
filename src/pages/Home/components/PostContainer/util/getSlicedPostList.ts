import { Post } from "@/types"

const getSlicedPostList = (postData: Post[] | undefined, listRange: number) => {
  if (!postData) {
    return []
  }

  if (postData.length === 1) {
    return [null, null, ...postData, null, null]
  }

  if (listRange === 1 && postData.length === 2) {
    return [null, ...postData, null, null]
  }

  if (postData.length === 2) {
    return [null, null, ...postData, null]
  }

  if (listRange === 2 && postData.length === 3) {
    return [...postData, null, null]
  }

  if (listRange === 1 && postData.length === 3) {
    return [null, ...postData, null]
  }

  if (postData.length === 3) {
    return [null, null, ...postData]
  }

  if (listRange === 0) {
    return [null, null, ...postData.slice(0, 3)]
  }

  if (listRange === 1) {
    return [null, ...postData.slice(0, 4)]
  }

  if (listRange >= postData.length - 2) {
    const makeNull = new Array(5 - (postData.length - listRange)).fill(null)
    return [...postData.slice(listRange - 2), ...makeNull]
  }

  return postData.slice(listRange - 2, listRange + 3)
}

export default getSlicedPostList
