import * as S from "./NotificationModal.Styles"
import NotificationTitle from "./components/NotificationTitle"
import NotificationList from "./components/NotificationList"
import CustomModal from "../Modal/components/CustomModal/CustomModal"
import { Notification } from "@/types"

interface NotificationModalProps {
  isShow: boolean
  onClose: () => void
  NotificationListData: Notification[]
}

const NotificationModal = ({
  isShow,
  onClose,
  NotificationListData,
}: NotificationModalProps) => {
  return (
    <CustomModal
      isShow={isShow}
      onClickAway={onClose}
      $width={44}
      $height={54}
    >
      <S.NotificationContainer>
        <NotificationTitle NotificationListData={NotificationListData} />
        <NotificationList
          NotificationListData={NotificationListData}
          onClose={onClose}
        />
      </S.NotificationContainer>
    </CustomModal>
  )
}
export default NotificationModal
