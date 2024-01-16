import { AUTH_API } from "@/apis/Api"

const getNotificationAPI = async () => {
  return await AUTH_API.get("/notifications")
    .then((res) => res.data)
    .catch(() => {
      return []
    })
}

export default getNotificationAPI
