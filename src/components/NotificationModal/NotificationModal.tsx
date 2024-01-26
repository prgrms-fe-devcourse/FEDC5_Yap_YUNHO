import * as S from "./NotificationModal.Styles"
import NotificationTitle from "./components/NotificationTitle/NotificationTitle"
import NotificationList from "./components/NotificationList/NotificationList"
import CustomModal from "../Modal/components/CustomModal/CustomModal"
import useGetNotification from "@/components/NotificationModal/hooks/useGetNotification"

interface NotificationModalProps {
  isShow: boolean
  onClose: () => void
}

const NotificationModal = ({ isShow, onClose }: NotificationModalProps) => {
  const { NotificationListData } = useGetNotification()
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
