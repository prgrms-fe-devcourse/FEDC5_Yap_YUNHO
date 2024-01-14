import DUMMY_DATA from "@/pages/Notification/constants/DUMMY_DATA"
import CustomModal from "../Modal/components/CustomModal/CustomModal"
import NotificationTitle from "./../../pages/Notification/NotificationTitle"
import NotificationList from "@/pages/Notification/NotificationList"
import * as S from "./NotificationModal.Styles"

interface NotificationModalProps {
  isShow: boolean
  onClose: () => void
}

const NotificationModal = ({ isShow, onClose }: NotificationModalProps) => {
  return (
    <CustomModal
      isShow={isShow}
      onClickAway={onClose}
      $width={44}
      $height={54}
    >
      <S.NotificationContainer>
        <NotificationTitle DUMMY_DATA={DUMMY_DATA} />
        <NotificationList DUMMY_DATA={DUMMY_DATA} />
      </S.NotificationContainer>
    </CustomModal>
  )
}
export default NotificationModal
