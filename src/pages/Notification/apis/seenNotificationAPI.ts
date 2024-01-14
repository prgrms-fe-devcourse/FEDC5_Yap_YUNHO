import { AUTH_API } from "@/apis/Api"

const seenNotificationAPI = async () => {
  // 인증을 매번 해야하는 번거로움 존재
  await AUTH_API.put("messages/conversations")
    .then()
    .catch(() => {
      throw new Error("알림 목록 받아 오기 실패")
    })
}

export default seenNotificationAPI
