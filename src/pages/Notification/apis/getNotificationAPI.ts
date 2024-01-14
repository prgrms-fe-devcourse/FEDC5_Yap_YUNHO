import { AUTH_API } from "@/apis/Api"

const getNotificationAPI = async () => {
  return AUTH_API.get("/notifications")
    .then((res) => res.data)
    .catch(() => {
      console.error("알림을 받아오는데 오류가 생김")
    })
}

export default getNotificationAPI
