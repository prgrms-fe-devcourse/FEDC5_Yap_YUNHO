import { AUTH_API } from "./Api"

interface SendNotification {
  notificationType: "COMMENT" | "FOLLOW" | "LIKE" | "MESSAGE"
  notificationTypeId: string
  userId: string
  postId?: string
}

const sendNotification = async (body: SendNotification) => {
  return await AUTH_API.post("/notifications/create", body)
}

export default sendNotification
