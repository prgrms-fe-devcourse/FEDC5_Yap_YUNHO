import { Notification } from "@/types"

const getNotificationOption = (
  notification: Notification,
  pathname: string,
) => {
  const { author, post, comment, message, follow, like } = notification
  console.log(pathname)
  const convertedPathName = pathname === "/" ? "/post" : pathname

  if (message) {
    return {
      NOTIFI_TEXT: "메시지를 보냈습니다",
      NOTIFI_NAVIGATION: `/directmessage/${author._id}`,
    }
  }
  if (post && like) {
    return {
      NOTIFI_TEXT: "게시물에 좋아요를 눌렀습니다",
      NOTIFI_NAVIGATION: `${convertedPathName}/postdetail/${post}`,
    }
  }
  if (post && comment) {
    return {
      NOTIFI_TEXT: "게시물에 댓글을 달았습니다",
      NOTIFI_NAVIGATION: `${convertedPathName}/postdetail/${post}`,
    }
  }

  if (follow) {
    return {
      NOTIFI_TEXT: "팔로우를 하였습니다",
      NOTIFI_NAVIGATION: `/profile/${author._id}`,
    }
  }
  if (post) {
    return {
      NOTIFI_TEXT: "게시물 관련 알림을 보냈습니다",
      NOTIFI_NAVIGATION: `${convertedPathName}/postdetail/${post}`,
    }
  }

  return {
    NOTIFI_TEXT: "알림을 보냈습니다",
    NOTIFI_NAVIGATION: ``,
  }
}

export default getNotificationOption
