import { useEffect, useState } from "react"
import * as S from "./DMList.Styles"
import DMListItem from "./DMListItem"
import { API, AUTH_API } from "@/apis/Api"
import authToken from "@/stores/authToken"
import { DMUserListProps } from "../../types"

const DMList = () => {
  const [DMUserList, setDMUserList] = useState([])
  const login = async () => {
    return await API.post("login", {
      email: "gnsdh8616@gmail.com",
      password: "gch220874!",
    }).then((res) => {
      authToken.setToken(res.data.token)
    })
  }
  const fetchDMUsers = async () => {
    return await AUTH_API.get("messages/conversations").then((res) => {
      setDMUserList(res.data)
    })
  }

  useEffect(() => {
    login()
    fetchDMUsers()
  }, [])

  return (
    <S.DMListLayout>
      <S.DMListNotice>
        <S.DMListNoticeTitle>DM 목록</S.DMListNoticeTitle>
        <S.DMListNoticeContent>8</S.DMListNoticeContent>
      </S.DMListNotice>
      <S.DMListContainer>
        {DMUserList.map((user) => {
          const {
            receiver,
            sender,
            isSeen,
            message,
            createdAt,
          }: DMUserListProps = user
          return (
            <DMListItem
              key={createdAt}
              receiver={receiver}
              message={message}
              sender={sender}
              createdAt={createdAt}
              isSeen={isSeen}
            />
          )
        })}
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList
