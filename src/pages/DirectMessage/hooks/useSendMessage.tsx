import { useMutation, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEY_GET_GROUP_MESSAGELIST } from "./useMessageGroupList"
import { QUERY_KEY_GET_MESSAGELIST } from "./useMessageList"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import sendMessageAPI from "../apis/sendMessageAPI"
import sendMessageNotificationAPI from "../apis/sendMessageNotificationAPI"
import { useParams } from "react-router-dom"
import { SendNotificationProps } from "@/types"

export const QUERY_KEY_SEND_MESSAGE = "SEND_MESSAGE"

const useSendMessage = () => {
  const queryClient = useQueryClient()
  const { id: othersUserId } = useParams()
  const { isShowModal, showModal, closeModal } = useModal()

  const AlertModalComponent = isShowModal ? (
    <AlertModal
      isShow={isShowModal}
      alertMessage="메시지를 보내는데 실패했습니다"
      onClose={closeModal}
    />
  ) : null

  const sendMessage = useMutation({
    mutationKey: [QUERY_KEY_SEND_MESSAGE],
    mutationFn: sendMessageAPI,
    onSuccess: (data) => {
      const { _id: messageId } = data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_GET_MESSAGELIST] })
      if (!othersUserId) {
        return
      }

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
      })

      const NotificationSubmission: SendNotificationProps = {
        notificationType: "MESSAGE",
        notificationTypeId: messageId,
        userId: othersUserId,
        postId: null,
      }
      sendMessageNotificationAPI(NotificationSubmission)
    },
    onError: () => {
      showModal()
    },
  })
  return { AlertModalComponent, sendMessage }
}

export default useSendMessage
