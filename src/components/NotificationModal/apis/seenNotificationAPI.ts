import { AUTH_API } from "@/apis/Api"

const seenNotificationAPI = async () => {
  await AUTH_API.put("/notifications/seen")
    .then()
    .catch(() => {
      throw new Error("알림 목록 받아 오기 실패")
    })
}

export default seenNotificationAPI
