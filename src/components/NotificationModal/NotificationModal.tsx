import * as S from "./NotificationModal.Styles"
import useGetNotification from "./hooks/useGetNotification"
import NotificationTitle from "./components/NotificationTitle"
import NotificationList from "./components/NotificationList"
import CustomModal from "../Modal/components/CustomModal/CustomModal"

interface NotificationModalProps {
  isShow: boolean
  onClose: () => void
}

const NotificationModal = ({ isShow, onClose }: NotificationModalProps) => {
  const { data: NotificationListData } = useGetNotification()
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
