import { useEffect, useState } from "react"
import * as S from "./DMList.Styles"
import DMListItem from "./DMListItem"
import { API, AUTH_API } from "@/apis/Api"
import authToken from "@/stores/authToken"
import { DMUserListProps } from "../../types"
import { Conversation } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"

const DMList = () => {
  const [DMUserList, setDMUserList] = useState([])
  const { setLogin } = useAuthUserStore()

  const login = async () => {
    return await API.post("login", {
      email: "gnsdh8616@gmail.com",
      password: "gch220874!",
    }).then((res) => {
      const { user, token } = res.data
      setLogin(user, token)
      authToken.setToken(token)
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
        {/* 여기 변수명이 잘 안지어네요.. */}
        <S.DMListNoticeTitle>DM 목록</S.DMListNoticeTitle>
        <S.DMListNoticeNumber>{DMUserList.length}</S.DMListNoticeNumber>
        <S.DMListNotNoticeTitle>안 읽음</S.DMListNotNoticeTitle>
        <S.DMListNotNoticedNumber>
          {
            DMUserList.filter((list: Conversation) => {
              return !list.seen
            }).length
          }
        </S.DMListNotNoticedNumber>
      </S.DMListNotice>
      <S.DMListContainer>
        {DMUserList.map((user) => {
          const {
            receiver,
            sender,
            seen,
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
              seen={seen}
            />
          )
        })}
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList
