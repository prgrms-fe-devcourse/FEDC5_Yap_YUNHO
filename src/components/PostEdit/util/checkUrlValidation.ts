const checkUrlValidation = (mediaUrl: string) => {
  if (!mediaUrl.trim()) {
    return false
  }

  return true
}

export default checkUrlValidation
