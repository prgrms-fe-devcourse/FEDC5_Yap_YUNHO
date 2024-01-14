import { AUTH_API } from "@/apis/Api"
import { SendNotificationProps } from "./../../../types/index"

const sendMessageNotificationAPI = async (
  NotificationSubmission: SendNotificationProps,
) => {
  await AUTH_API.post("/notifications/create", NotificationSubmission)
    .then((res) => res.data)
    .catch(() => {
      throw new Error("메시지 알림 보내기 실패")
    })
}

export default sendMessageNotificationAPI
