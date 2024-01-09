import { useCallback, useEffect, useState } from "react"
import * as S from "./DMList.Styles"
import DMListItem from "./DMListItem"
import { API, AUTH_API } from "@/apis/Api"
import authToken from "@/stores/authToken"
import { DMUserListProps } from "../../types"
import { Conversation } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import decideChatUserName from "../../utils/decideChatUserName"
import { handleClickProps } from "./../../types/index"

const DMList = () => {
  const { setLogin } = useAuthUserStore()
  const [DMUserList, setDMUserList] = useState([])
  const [selectedChattingId, setSelectedChattingId] = useState("")
  const navigate = useNavigate()

  const fetchDMUsers = useCallback(async () => {
    // 테스트를 위해 항상 내 아이디로 접속(추후에 삭제 예정)
    await API.post("login", {
      email: "gnsdh8616@gmail.com",
      password: "gch220874!",
    }).then((res) => {
      const { user, token } = res.data
      setLogin(user, token)
      authToken.setToken(token)
    })

    await AUTH_API.get("messages/conversations")
      .then((res) => {
        setDMUserList(res.data)
      })
      .catch((error) => {
        console.log(error, "DMList 받아오는데 문제가 생김")
      })
  }, [setLogin])

  const handleClick = ({ user, receiver, sender }: handleClickProps) => {
    // 상대방의 아이디
    const { _id } = decideChatUserName(user, receiver, sender)
    navigate(`/directmessage/${_id}`)
    setSelectedChattingId(_id)
  }

  const DMListCount = {
    total: DMUserList.length,
    NotNotice: DMUserList.filter((list: Conversation) => {
      return !list.seen
    }).length,
  }

  useEffect(() => {
    fetchDMUsers()
  }, [fetchDMUsers])

  return (
    <S.DMListLayout>
      <S.DMListInfo>
        <S.DMListTotalNoticeTitle>DM 목록</S.DMListTotalNoticeTitle>
        <S.DMListTotalNoticeNumber>
          {DMListCount.total}
        </S.DMListTotalNoticeNumber>
        <S.DMListNotNoticeTitle>안 읽음</S.DMListNotNoticeTitle>
        <S.DMListNotNoticedNumber>
          {DMListCount.NotNotice}
        </S.DMListNotNoticedNumber>
      </S.DMListInfo>
      <S.DMListContainer>
        {DMUserList.map((user: DMUserListProps) => {
          return (
            <DMListItem
              key={user.createdAt}
              receiver={user.receiver}
              message={user.message}
              sender={user.sender}
              createdAt={user.createdAt}
              isSeen={user.isSeen}
              selectedChattingId={selectedChattingId}
              handleClick={handleClick}
            />
          )
        })}
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList
