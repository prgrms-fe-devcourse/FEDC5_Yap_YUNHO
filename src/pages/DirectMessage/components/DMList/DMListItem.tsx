import * as S from "./DMList.Styles"
import { DMUserListProps } from "./../../types"
import DMListProfile from "./DMListProfile"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import decideChatUserName from "../../utils/decideChatUserName"

const DMListItem = ({
  receiver,
  sender,
  message,
  createdAt,
  seen,
}: DMUserListProps) => {
  const { user } = useAuthUserStore()
  const navigate = useNavigate()

  return (
    <S.DMListItemLayout
      onClick={() => {
        // 상대방의 아이디
        const { _id } = decideChatUserName(user, receiver, sender)
        navigate(`/directmessage/${_id}`)
      }}
    >
      <DMListProfile seen={seen} />

      <S.DMListChat>
        <S.DMListChatUserName>
          {decideChatUserName(user, receiver, sender).fullName}
        </S.DMListChatUserName>
        <S.DMListChatContent>{message}</S.DMListChatContent>
        <S.DMListChatDate>{createdAt.slice(0, 10)}</S.DMListChatDate>
      </S.DMListChat>
    </S.DMListItemLayout>
  )
}

export default DMListItem

// 메시지와 날짜, 읽음 처리는 그대로
// 프로필과 상대방이름은 내가 최근에 메시지를 보낸 경우 Receiver의 정보를(Sender의 아이디가 나의 아이디와 같은 경우)
// 내가 최근에 메시지를 받은 경우 Sender의 정보를(receiver의 아이디가 나의 아이디와 같을 경우)
// 프로필 이미지는 설정안하면 아예 값 조차 오지 않음
// updatedAt은 어떻게 사용하는지 모르겠음, 그냥 creatdAt이 게속 갱신됨
