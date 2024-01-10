import { NOT_FOUND_IMAGE } from "@/components/PostEdit/constants/PostEdit.Constants"

const YOUTUBE_ID_REGEX =
  /(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/im

const getThumbnailByUrl = (url: string) => {
  const matched = url.match(YOUTUBE_ID_REGEX)

  if (!matched) {
    return NOT_FOUND_IMAGE.CHECK_KEY
  }

  return `https://i1.ytimg.com/vi/${matched[1]}/sddefault.jpg
  `
}

export default getThumbnailByUrl
